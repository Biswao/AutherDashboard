import { ServiceCategory, SubjectGroup } from "../interfaces/types";

export const servicesData: ServiceCategory[] = [
    {
        title: "Editing Services",
        id: "1",
        services: [
            { name: "Proofreading", price: 50, id: "9" },
            { name: "Substantive Editing", price: 100, id: "104" },
            { name: "Extensive Substantive Editing", price: 150, id: "8" },
            { name: "Customized Editing Service", price: 200, id: "none" }
        ]
    },
    {
        title: "Journal Publication Packages",
        services: [
            { name: "Standard Publication Package", price: 250, id: "187" },
            { name: "Advanced Publication Package", price: 300, id: "186" },
            { name: "Premium Publication Package", price: 400, id: "185" },
            { name: "Premium Plus Publication Package", price: 500, id: "332" },
            { name: "Book Publication Package", price: 350, id: "none" }
        ]
    },
    {
        title: "Publication Support Services",
        services: [
            { name: "Journal Publication", price: 80, id: '5' },
            { name: "Formatting Service", price: 60, id: "3" },
            { name: "Illustration & Enhancement", price: 120, id: "169" }
        ]
    }
];

export const majorSubjectTypeOptions = (data:SubjectGroup[]) => {
    const groupedOptions = data.map(({ subject, sub_subjects }) => ({
        label: subject,
        options: sub_subjects.map(sub => {
            const [key, value] = Object.entries(sub)[0];
            return { value: key, label: value };
        })
    }));

    return groupedOptions
}