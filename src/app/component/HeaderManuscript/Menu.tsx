interface SubMenuItem {
    label: string;
    link?: string;
    subMenu?: SubMenuItem[];
  }
  
  interface MenuItem {
    label: string;
    subMenu: SubMenuItem[];
    link?: string ;
  }
  
 const menu: MenuItem[] = [
  {
    label: "SERVICES",
    subMenu: [
      {
        label: "Editing & Language Services",
        link: "https://manuscriptedit.com/EditingOverview/",
        subMenu: [
          { label: "Editing Overview", link: "https://manuscriptedit.com/EditingOverview/" },
          { label: "Proofreading", link: "https://manuscriptedit.com/ProofReading/" },
          { label: "Copyediting", link: "https://manuscriptedit.com/CopyEdit/" },
          { label: "Substantive Editing", link: "https://manuscriptedit.com/SubEditing/" },
          {
            label: "Extensive Substantive Editing",
            link: "https://manuscriptedit.com/ExtensiveSubstantiveEditing/",
          },
          {
            label: "Plagiarism Check and Reduction",
            link: "https://manuscriptedit.com/PlagiarismCheckReduction/",
          },
          { label: "A.I Reduction", link: "https://manuscriptedit.com/AIReduction/" },
          { label: "Translation Services", link: "https://manuscriptedit.com/TranslationOverview/" },
        ],
      },
      {
        label: "Publication Support",
        link: "https://manuscriptedit.com/PackageService/",
        subMenu: [
          { label: "Publication Packages", link: "https://manuscriptedit.com/PackageService/" },
          { label: "Journal Selection", link: "https://manuscriptedit.com/JournalSel/" },
          { label: "Journal Submission", link: "https://manuscriptedit.com/JournalSub/" },
          { label: "Peer Review & Pre Submission", link: "https://manuscriptedit.com/PeerReview/" },
          { label: "Response to Reviewer", link: "https://manuscriptedit.com/ResponseToReviewer/" },
          { label: "Formatting", link: "https://manuscriptedit.com/Formatting/" },
          { label: "Citation Booster", link: "https://manuscriptedit.com/CitationBooster/" },
          { label: "Poster Creation & Design", link: "https://manuscriptedit.com/PosterCreation/" },
          { label: "Illustration Services", link: "https://manuscriptedit.com/MedicalDesign/" },
        ],
      },
      {
        label: "Scientific / Academic Writing",
        link: "https://manuscriptedit.com/scientificAcademicOverview/",
        subMenu: [
          {
            label: "Scientific / Academic Writing Overview ",
            link: "https://manuscriptedit.com/scientificAcademicOverview/",
          },
          { label: "Writing Assistance", link: "https://manuscriptedit.com/Writing/" },
          { label: "Medical Writing Assistance", link: "https://manuscriptedit.com/MedicalWrite/" },
          {
            label: "Scientific & Academic Writing Assistance",
            link: "https://manuscriptedit.com/ScientificWriting/",
          },
          { label: "Technical Writing Assistance", link: "https://manuscriptedit.com/TechnicalWriting/" },
          { label: "Rewriting Assistance", link: "https://manuscriptedit.com/MedicalRewrite/" },
        ],
      },
      {
        label: "Research & Statistical Analysis",
        link: "https://manuscriptedit.com/ResearchSupportOverview/",
        subMenu: [
          {
            label: "Research Support Overview",
            link: "https://manuscriptedit.com/ResearchSupportOverview/",
          },
          { label: "Statistical Analysis", link: "https://manuscriptedit.com/StatisticalAnalysis/" },
          { label: "Systematic Review", link: "https://manuscriptedit.com/SystematicReview/" },
          { label: "Meta Analysis", link: "https://manuscriptedit.com/MetaAnalysis/" },
          { label: "Data Analysis", link: "https://manuscriptedit.com/DataAnalysis/" },
        ],
      },
      {
        label: "Thesis & Dissertation Services",
        link: "https://manuscriptedit.com/ThesisDissertOverview/",
        subMenu: [
          {
            label: "Thesis and Dissertation Overview",
            link: "https://manuscriptedit.com/ThesisDissertOverview/",
          },
          { label: "PhD Thesis", link: "https://manuscriptedit.com/PHDThesis/" },
          { label: "Master Thesis", link: "https://manuscriptedit.com/MasterThesis/" },
        ],
      },
      {
        label: "High-Impact Services",
        link: "https://manuscriptedit.com/HighImpactOverview/",
        subMenu: [
          {
            label: "High-Impact Journal Overview",
            link: "https://manuscriptedit.com/HighImpactOverview/",
          },
          { label: "High-Impact Scientific Editing", link: "https://manuscriptedit.com/HighImpact/" },
          {
            label: "High-Impact Journal Publication Support",
            link: "https://manuscriptedit.com/HighImpactJournal/",
          },
        ],
      },
    ],
  },
  {
    label: "QUALITY",
    subMenu: [
      { label: "Quality & Delivery", link: "https://manuscriptedit.com/QualityDelivery/" },
      {
        label: "Request a Sample Editing",
        link: "https://secure.tst.manuscriptedit.com/samplework",
      },
      { label: "FAQs", link: "https://manuscriptedit.com/FAQ/" },
      { label: "How We Work", link: "https://manuscriptedit.com/Process/" },
      { label: "Service Guarantee", link: "https://manuscriptedit.com/QualityAssurance/" },
      { label: "Editorial Process", link: "https://manuscriptedit.com/Process/" },
      { label: "Confidentiality", link: "https://manuscriptedit.com/Security/" },
      { label: "Refund & Cancellation", link: "https://manuscriptedit.com/RefundAndCancellation/" },
      { label: "Testimonial", link: "https://manuscriptedit.com/Testimonial/" },
    ],
  },
  {
    label: "PRICE CALCULATOR",
    subMenu: [
      { label: "Price Calculator", link: "https://manuscriptedit.com/Prices/" },
      {
        label: "Submit Manuscript",
        link: "https://manuscriptedit.com/AuthorDashboard/",
      },
      {
        label: "Quotation",
        link: "https://secure.tst.manuscriptedit.com/quotation",
      },
      { label: "Payment Method", link: "https://manuscriptedit.com/PaymentMethod/" },
      { label: "Discount & Offers", link: "https://manuscriptedit.com/Discount/" },
    ],
  },
  {
    label: "EDITOR",
    subMenu: [
      { label: "Editor Profile", link: "https://manuscriptedit.com/EditorialPanel/" },
      { label: "Editor Panel", link: "https://manuscriptedit.com/EditPanel/" },
      {
        label: "New Editor",
        link: "https://manuscriptedit.com/AuthorDashboard/1",
      },
      {
        label: "Editor Login",
        link: "https://secure.tst.manuscriptedit.com/logineditor",
      },
      { label: "Careers", link: "https://manuscriptedit.com/Career/" },
    ],
  },
  {
    label: "MORE",
    subMenu: [
      { label: "About Us", link: "https://manuscriptedit.com/About/" },
      { label: "Client List", link: "https://manuscriptedit.com/ClientList/" },
      { label: "Recent Partners", link: "https://manuscriptedit.com/PartnerRecent/" },
      { label: "Contact Us", link: "https://manuscriptedit.com/ContactUs/" },
      { label: "News & Conferences", link: "https://manuscriptedit.com/NewsPromotions/" },
      {
        label: "Referral Partner Program",
        link: "https://manuscriptedit.com/AuthorDashboard/",
      },
      { label: "Global Partner Program", link: "https://manuscriptedit.com/GlobalPartner2/" },
      {
        label: "Webinar Registration",
        link: "https://secure.tst.manuscriptedit.com/wregistration",
      },
      {
        label: "Scholar Hangout",
        link: "https://scholar-hangout.manuscriptedit.com",
      },
    ],
  },
];


 export const menuMobile: MenuItem[] = [
  {
    label: "SERVICES",
    subMenu: [
      {
        label: "Editing & Language Services",
        link: "https://manuscriptedit.com/EditingOverview/",
        subMenu: [
          { label: "Editing Overview", link: "https://manuscriptedit.com/EditingOverview/" },
          { label: "Proofreading", link: "https://manuscriptedit.com/ProofReading/" },
          { label: "Copyediting", link: "https://manuscriptedit.com/CopyEdit/" },
          { label: "Substantive Editing", link: "https://manuscriptedit.com/SubEditing/" },
          {
            label: "Extensive Substantive Editing",
            link: "https://manuscriptedit.com/ExtensiveSubstantiveEditing/",
          },
          {
            label: "Plagiarism Check and Reduction",
            link: "https://manuscriptedit.com/PlagiarismCheckReduction/",
          },
          { label: "A.I Reduction", link: "https://manuscriptedit.com/AIReduction/" },
          { label: "Translation Services", link: "https://manuscriptedit.com/TranslationOverview/" },
        ],
      },
      {
        label: "Publication Support",
        link: "https://manuscriptedit.com/PackageService/",
        subMenu: [
          { label: "Publication Packages", link: "https://manuscriptedit.com/PackageService/" },
          { label: "Journal Selection", link: "https://manuscriptedit.com/JournalSel/" },
          { label: "Journal Submission", link: "https://manuscriptedit.com/JournalSub/" },
          { label: "Peer Review & Pre Submission", link: "https://manuscriptedit.com/PeerReview/" },
          { label: "Response to Reviewer", link: "https://manuscriptedit.com/ResponseToReviewer/" },
          { label: "Formatting", link: "https://manuscriptedit.com/Formatting/" },
          { label: "Citation Booster", link: "https://manuscriptedit.com/CitationBooster/" },
          { label: "Poster Creation & Design", link: "https://manuscriptedit.com/PosterCreation/" },
          { label: "Illustration Services", link: "https://manuscriptedit.com/MedicalDesign/" },
        ],
      },
      {
        label: "Scientific / Academic Writing",
        link: "https://manuscriptedit.com/scientificAcademicOverview/",
        subMenu: [
          {
            label: "Scientific / Academic Writing Overview ",
            link: "https://manuscriptedit.com/scientificAcademicOverview/",
          },
          { label: "Writing Assistance", link: "https://manuscriptedit.com/Writing/" },
          { label: "Medical Writing Assistance", link: "https://manuscriptedit.com/MedicalWrite/" },
          {
            label: "Scientific & Academic Writing Assistance",
            link: "https://manuscriptedit.com/ScientificWriting/",
          },
          { label: "Technical Writing Assistance", link: "https://manuscriptedit.com/TechnicalWriting/" },
          { label: "Rewriting Assistance", link: "https://manuscriptedit.com/MedicalRewrite/" },
        ],
      },
      {
        label: "Research & Statistical Analysis",
        link: "https://manuscriptedit.com/ResearchSupportOverview/",
        subMenu: [
          {
            label: "Research Support Overview",
            link: "https://manuscriptedit.com/ResearchSupportOverview/",
          },
          { label: "Statistical Analysis", link: "https://manuscriptedit.com/StatisticalAnalysis/" },
          { label: "Systematic Review", link: "https://manuscriptedit.com/SystematicReview/" },
          { label: "Meta Analysis", link: "https://manuscriptedit.com/MetaAnalysis/" },
          { label: "Data Analysis", link: "https://manuscriptedit.com/DataAnalysis/" },
        ],
      },
      {
        label: "Thesis & Dissertation Services",
        link: "https://manuscriptedit.com/ThesisDissertOverview/",
        subMenu: [
          {
            label: "Thesis and Dissertation Overview",
            link: "https://manuscriptedit.com/ThesisDissertOverview/",
          },
          { label: "PhD Thesis", link: "https://manuscriptedit.com/PHDThesis/" },
          { label: "Master Thesis", link: "https://manuscriptedit.com/MasterThesis/" },
        ],
      },
      {
        label: "High-Impact Services",
        link: "https://manuscriptedit.com/HighImpactOverview/",
        subMenu: [
          {
            label: "High-Impact Journal Overview",
            link: "https://manuscriptedit.com/HighImpactOverview/",
          },
          { label: "High-Impact Scientific Editing", link: "https://manuscriptedit.com/HighImpact/" },
          {
            label: "High-Impact Journal Publication Support",
            link: "https://manuscriptedit.com/HighImpactJournal/",
          },
        ],
      },
    ],
  },
  {
    label: "QUALITY",
    subMenu: [
      { label: "Quality & Delivery", link: "https://manuscriptedit.com/QualityDelivery/" },
      {
        label: "Request a Sample Editing",
        link: "https://secure.tst.manuscriptedit.com/samplework",
      },
      { label: "FAQs", link: "https://manuscriptedit.com/FAQ/" },
      { label: "How We Work", link: "https://manuscriptedit.com/Process/" },
      { label: "Service Guarantee", link: "https://manuscriptedit.com/QualityAssurance/" },
      { label: "Editorial Process", link: "https://manuscriptedit.com/Process/" },
      { label: "Confidentiality", link: "https://manuscriptedit.com/Security/" },
      { label: "Refund & Cancellation", link: "https://manuscriptedit.com/RefundAndCancellation/" },
      { label: "Testimonial", link: "https://manuscriptedit.com/Testimonial/" },
    ],
  },
  {
    label: "PRICE CALCULATOR",
    subMenu: [
      { label: "Price Calculator", link: "https://manuscriptedit.com/Prices/" },
      {
        label: "Submit Manuscript",
        link: "https://manuscriptedit.com/AuthorDashboard/",
      },
      {
        label: "Quotation",
        link: "https://secure.tst.manuscriptedit.com/quotation",
      },
      { label: "Payment Method", link: "https://manuscriptedit.com/PaymentMethod/" },
      { label: "Discount & Offers", link: "https://manuscriptedit.com/Discount/" },
    ],
  },
  {
    label: "EDITOR",
    subMenu: [
      { label: "Editor Profile", link: "https://manuscriptedit.com/EditorialPanel/" },
      { label: "Editor Panel", link: "https://manuscriptedit.com/EditPanel/" },
      {
        label: "New Editor",
        link: "https://manuscriptedit.com/AuthorDashboard/1",
      },
      {
        label: "Editor Login",
        link: "https://secure.tst.manuscriptedit.com/logineditor",
      },
      { label: "Careers", link: "https://manuscriptedit.com/Career/" },
    ],
  },
  {
    label: "MORE",
    subMenu: [
      { label: "About Us", link: "https://manuscriptedit.com/About/" },
      { label: "Client List", link: "https://manuscriptedit.com/ClientList/" },
      { label: "Recent Partners", link: "https://manuscriptedit.com/PartnerRecent/" },
      { label: "Contact Us", link: "https://manuscriptedit.com/ContactUs/" },
      { label: "News & Conferences", link: "https://manuscriptedit.com/NewsPromotions/" },
      {
        label: "Referral Partner Program",
        link: "https://manuscriptedit.com/AuthorDashboard/",
      },
      { label: "Global Partner Program", link: "https://manuscriptedit.com/GlobalPartner2/" },
      {
        label: "Webinar Registration",
        link: "https://secure.tst.manuscriptedit.com/wregistration",
      },
      {
        label: "Scholar Hangout",
        link: "https://scholar-hangout.manuscriptedit.com",
      },
    ],
  },
];


 
  
  export default menu;


  