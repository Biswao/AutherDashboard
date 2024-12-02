"use client"
import { MainContext } from "@/app/context/MainContext";
import { FileUploadResponse, QuotationData, serviceNameType, serviceType, SubjectGroup } from "@/app/utils/interfaces/types";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation'


const useQuotation = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [serviceType, setServiceType] = useState<serviceType[]>([])
    const [serviceName, setServiceName] = useState<serviceNameType[]>([])
    const [majorSubjectType, setMajorSubjectType] = useState<SubjectGroup[]>([])
    const router = useRouter()

    const {setActive} = useContext(MainContext)

    useEffect(() => {
        getServiceType()
        getServiceNameById()
        getAllMajorSubjectType()
    }, [])



    const getServiceType = async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://www.secure.manuscriptedit.com/api/get_all_service_type.php`);
            if (!response.ok) {
                throw new Error('Failed to fetch author details');
            }

            const data = await response.json();
            if (data && data.length > 0) {
                setServiceType(data);
            } else {
                setServiceType([]);
            }
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setLoading(false)
        }
    }

    const getServiceNameById = async (id: string="1") => {
        setLoading(true)
        try {
            const response = await fetch(`https://www.secure.manuscriptedit.com/api/get_service_name.php?serv_type_id=${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch author details');
            }

            const data = await response.json();
            if (data && data.length > 0) {
                setServiceName(data);
            } else {
                setServiceName([]);
            }
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setLoading(false)
        }
    }

    const getAllMajorSubjectType = async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://www.secure.manuscriptedit.com/api/get_all_major_subject_type.php`);
            if (!response.ok) {
                throw new Error('Failed to fetch author details');
            }

            const data = await response.json();
            if (data && data.length > 0) {
                setMajorSubjectType(data);
            } else {
                setMajorSubjectType([]);
            }
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setLoading(false)
        }
    }

    const uploadFile = async (file: File,user_id: string,order_type: string): Promise<string> => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("user_id", user_id);
            formData.append("order_type", order_type);

            const response = await fetch("https://www.secure.manuscriptedit.com/api/editor_order_file_upload.php", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`File upload failed: ${response.statusText}`);
            }

            const data: FileUploadResponse = await response.json();
            return data.FileUrl;
        } catch (err: any) {
            console.error("Error uploading file:", err);
            throw new Error(err.message || "Failed to upload file.");
        }
    };

    const submitQuotation = async (formData: QuotationData) => {
        setLoading(true);
        setError(null);

        try {
            // Upload files and collect their names
            const upldContentFileName = formData.upld_content_file && formData.user_id
                ? await uploadFile(formData.upld_content_file,formData.user_id,formData.order_type)
                : null;
            const upldFigureFileName = formData.upld_figure_file && formData.user_id
                ? await uploadFile(formData.upld_figure_file,formData.user_id,formData.order_type)
                : null;
            const upldTableFileName = formData.upld_table_file && formData.user_id
                ? await uploadFile(formData.upld_table_file,formData.user_id,formData.order_type)
                : null;

            const requestBody = {
                user_id: formData.user_id,
                order_type: formData.order_type,
                service_type: formData.service_type,
                service_name: formData.service_name,
                major_subject: formData.major_subject,
                specific_subject: formData.specific_subject,
                delivery_date: formData.delivery_date,
                language: formData.language,
                inst_for_editor: formData.inst_for_editor,
                word_count: formData.word_count,
                pay_mode: formData.pay_mode,
                upld_content_file: upldContentFileName,
                upld_figure_file: upldFigureFileName,
                upld_table_file: upldTableFileName,
            };

            const response = await fetch(
                "https://www.secure.manuscriptedit.com/api/submit_quotation.php",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(requestBody),
                }
            );

            if (!response.ok) {
                throw new Error(`Error submitting quotation: ${response.statusText}`);
            }

            const {Message} = await response.json();
            if(Message === "Data Saved Successfully"){
                toast.success("Quotation Submitted!!")
                router.push('/UserDashboard')
            }else{
                toast.error("Something went wrong")
            }
        } catch (err: any) {
            setError(err.message || "Something went wrong.");
            toast.error("Something went wrong")
        } finally {
            setLoading(false);
        }
    };

    return { serviceType, loading, error, getServiceNameById, serviceName, majorSubjectType, submitQuotation }
}

export default useQuotation