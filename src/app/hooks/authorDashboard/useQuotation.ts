"use client"
import { QuotationData, serviceNameType, serviceType, SubjectGroup } from "@/app/utils/interfaces/types";
import { useEffect, useState } from "react";


const useQuotation = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [serviceType, setServiceType] = useState<serviceType[]>([])
    const [serviceName, setServiceName] = useState<serviceNameType[]>([])
    const [majorSubjectType, setMajorSubjectType] = useState<SubjectGroup[]>([])

    useEffect(() => {
        getServiceType()
        getServiceNameById("1")
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

    const getServiceNameById = async (id: string) => {
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

    const getAllMajorSubjectType = async() => {
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

    const submitQuotation = async (formData: QuotationData) => {
        setLoading(true);
        setError(null);
    
        try {
          // Prepare form data for file upload
          const formDataToSend = new FormData();
          formDataToSend.append("user_id", formData.user_id);
          formDataToSend.append("order_type", formData.order_type);
          formDataToSend.append("service_type", formData.service_type);
          formDataToSend.append("service_name", formData.service_name);
          formDataToSend.append("major_subject", formData.major_subject);
          formDataToSend.append("specific_subject", formData.specific_subject);
          formDataToSend.append("delivery_date", formData.delivery_date);
          formDataToSend.append("language", formData.language);
          formDataToSend.append("inst_for_editor", formData.inst_for_editor);
          formDataToSend.append("word_count", formData.word_count);
          formDataToSend.append("pay_mode", formData.pay_mode);
          if (formData.upld_content_file) {
            formDataToSend.append("upld_content_file", formData.upld_content_file);
          }
          if (formData.upld_figure_file) {
            formDataToSend.append("upld_figure_file", formData.upld_figure_file);
          }
          if (formData.upld_table_file) {
            formDataToSend.append("upld_table_file", formData.upld_table_file);
          }
    
          const response = await fetch(
            "https://www.secure.manuscriptedit.com/api/submit_quotation.php",
            {
              method: "POST",
              body: formDataToSend,
            }
          );
    
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
    
          const data = await response.json();
        } catch (err: any) {
          console.error("Error submitting quotation:", err);
          setError(err.response?.data?.message || "Something went wrong.");
        } finally {
          setLoading(false);
        }
      };

    return { serviceType, loading, error, getServiceNameById, serviceName, majorSubjectType }
}

export default useQuotation