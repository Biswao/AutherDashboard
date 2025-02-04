"use client";

import { MainContext } from "@/app/context/MainContext";
import {
  countryListType,
  FileUploadResponse,
  FormDataOne,
  FormDataThree,
  FormDataTwo,
  PublicationFormType,
  serviceNameType,
} from "@/app/utils/interfaces/types";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { SubmitManuscriptContext } from "@/app/context/SubmitManuscriptContext";

const useManuscript = () => {
  const [countryList, setCountryList] = useState<countryListType[]>([]);
  const [serviceName, setServiceName] = useState<serviceNameType[]>([]);
  const [error, setError] = useState<boolean | string>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const { setActive } = useContext(MainContext);
  const { totalPrice, setTotalPrice } = useContext(SubmitManuscriptContext);
  console.log({ totalPrice });

  useEffect(() => {
    fetchCountryList();
  }, []);

  const getServiceNameById = async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.secure.manuscriptedit.com/api/get_service_name.php?serv_type_id=${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch author details");
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
      setLoading(false);
    }
  };

  const fetchCountryList = async () => {
    try {
      const countryData = await fetch(
        `https://www.secure.manuscriptedit.com/api/get_all_country_list.php`
      );
      if (!countryData.ok) {
        throw new Error("Order Fetching Failed.");
      }
      const dataRcvd = await countryData.json();
      if (dataRcvd && dataRcvd.length > 0) {
        setCountryList(dataRcvd);
      } else {
        setCountryList([]);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const uploadFile = async (
    file: File,
    user_id: string,
    order_type: string
  ): Promise<string> => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("user_id", user_id);
      formData.append("order_type", order_type);

      const response = await fetch(
        "https://www.secure.manuscriptedit.com/api/editor_order_file_upload.php",
        {
          method: "POST",
          body: formData,
        }
      );

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

  const submitQuotation = async (
    formDataOne: FormDataOne,
    formDataTwo: FormDataTwo,
    formDataThree: FormDataThree,
  ) => {
    setLoading(true);

    try {
      // Upload files and collect their names
      const upldContentFileName =
        formDataTwo.upld_content_file && formDataOne.user_id
          ? await uploadFile(
              formDataTwo.upld_content_file,
              formDataOne.user_id,
              formDataOne.order_type
            )
          : null;
      const upldFigureFileName =
        formDataTwo.upld_figure_file && formDataOne.user_id
          ? await uploadFile(
              formDataTwo.upld_figure_file,
              formDataOne.user_id,
              formDataOne.order_type
            )
          : null;
      const upldTableFileName =
        formDataTwo.upld_table_file && formDataOne.user_id
          ? await uploadFile(
              formDataTwo.upld_table_file,
              formDataOne.user_id,
              formDataOne.order_type
            )
          : null;

      const requestBody = {
        user_id: formDataOne.user_id,
        order_type: "manu",
        service_type: formDataOne.service_type,
        service_name: formDataOne.service_name,
        journal_format: formDataOne.journal_format,
        major_subject: formDataOne.major_subject,
        specific_subject: formDataOne.specific_subject,
        language: formDataOne.language,
        word_count: formDataOne.word_count,
        total_price: totalPrice,
        turn_ar_time: formDataOne.turn_ar_time,
        inst_for_editor: formDataOne.inst_for_editor,
        upld_content_file: upldContentFileName,
        upld_figure_file: upldFigureFileName,
        upld_table_file: upldTableFileName,
        title: formDataTwo.title,
        abstract: formDataTwo.abstract,
        keyword: formDataTwo.keyword,
        bill_name: formDataThree.bill_name,
        bill_addr1: formDataThree.bill_addr1,
        bill_addr2: formDataThree.bill_addr2,
        bill_phone: formDataThree.bill_phone,
        bill_city: formDataThree.bill_city,
        bill_state: formDataThree.bill_state,
        bill_zip: formDataThree.bill_zip,
        bill_country: formDataThree.bill_country,
      };

      const response = await fetch(
        "https://www.secure.manuscriptedit.com/api/submit_manuscript.php",
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

      const { Message } = await response.json();
      if (Message === "Data Saved Successfully") {
        toast.success("Manuscript Submitted!!");
        router.push("/UserDashboard");
      } else {
        toast.error("Something went wrong");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const submitQuotationJournalPublicationPackage = async (
    JournalPublicationFormData: PublicationFormType,
    formDataOne: FormDataOne,
    formDataTwo: FormDataTwo,
    formDataThree: FormDataThree
  ) => {
    setLoading(true);

    try {
      const upldContentFileName =
        JournalPublicationFormData.upld_content_file &&
        JournalPublicationFormData.user_id
          ? await uploadFile(
              JournalPublicationFormData.upld_content_file,
              JournalPublicationFormData.user_id,
              JournalPublicationFormData.order_type
            )
          : null;
      const upldFigureFileName =
        JournalPublicationFormData.upld_figure_file &&
        JournalPublicationFormData.user_id
          ? await uploadFile(
              JournalPublicationFormData.upld_figure_file,
              JournalPublicationFormData.user_id,
              JournalPublicationFormData.order_type
            )
          : null;
      const upldTableFileName =
        JournalPublicationFormData.upld_table_file &&
        JournalPublicationFormData.user_id
          ? await uploadFile(
              JournalPublicationFormData.upld_table_file,
              JournalPublicationFormData.user_id,
              JournalPublicationFormData.order_type
            )
          : null;

      const requestBody = {
        user_id: JournalPublicationFormData.user_id,
        order_type: "manu",
        service_type: JournalPublicationFormData.service_type,
        service_name: JournalPublicationFormData.service_name,
        word_count: JournalPublicationFormData.word_count,
        inst_for_editor: JournalPublicationFormData.inst_for_editor,
        upld_content_file: upldContentFileName,
        upld_figure_file: upldFigureFileName,
        upld_table_file: upldTableFileName,
        title: JournalPublicationFormData.title,
        abstract: JournalPublicationFormData.abstract,
        keyword: JournalPublicationFormData.keyword,
        turn_ar_time: "0",
        journal_format: formDataOne.journal_format || "000",
        major_subject: formDataOne.major_subject || "0",
        specific_subject: formDataOne.specific_subject || "test",
        language: formDataOne.language || "test  ",
        total_price: totalPrice,
        bill_name: formDataThree.bill_name || "test",
        bill_addr1: formDataThree.bill_addr1 || "test",
        bill_addr2: formDataThree.bill_addr2 || "test",
        bill_phone: formDataThree.bill_phone || "test",
        bill_city: formDataThree.bill_city || "test",
        bill_state: formDataThree.bill_state || "test",
        bill_zip: formDataThree.bill_zip || "test",
        bill_country: formDataThree.bill_country || "4",
      };

      const response = await fetch(
        "https://www.secure.manuscriptedit.com/api/submit_manuscript.php",
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

      const { Message } = await response.json();
      if (Message === "Data Saved Successfully") {
        toast.success("Manuscript Submitted!!");
        router.push("/UserDashboard");
      } else {
        toast.error("Something went wrong");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return {
    countryList,
    error,
    loading,
    submitQuotation,
    submitQuotationJournalPublicationPackage,
    serviceName,
    getServiceNameById,
  };
};

export default useManuscript;
