import { ServiceCategory, SubjectGroup } from "../interfaces/types";

export const servicesData: ServiceCategory[] = [
    {
        title: "Editing Services",
        services: [
            { name: "Proofreading", price: 50 },
            { name: "Substantive Editing", price: 100 },
            { name: "Extensive Substantive Editing", price: 150 },
            { name: "Customized Editing Service", price: 200 }
        ]
    },
    {
        title: "Journal Publication Packages",
        services: [
            { name: "Standard Publication Package", price: 250 },
            { name: "Advanced Publication Package", price: 300 },
            { name: "Premium Publication Package", price: 400 },
            { name: "Premium Plus Publication Package", price: 500 },
            { name: "Book Publication Package", price: 350 }
        ]
    },
    {
        title: "Publication Support Services",
        services: [
            { name: "Journal Publication", price: 80 },
            { name: "Formatting Service", price: 60 },
            { name: "Illustration & Enhancement", price: 120 }
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