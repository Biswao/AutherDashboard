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
          link: "/EditingOverview",
          subMenu: [
            { label: "Editing Overview", link: "/EditingOverview" },
            { label: "Proofreading", link: "/ProofReading" },
            { label: "Copyediting", link: "/CopyEdit" },
            { label: "Substantive Editing", link: "/SubEditing" },
            {
              label: "Extensive Substantive Editing",
              link: "/ExtensiveSubstantiveEditing",
            },
            {
              label: "Plagiarism Check and Reduction",
              link: "/PlagiarismCheckReduction",
            },
            { label: "A.I Reduction", link: "/AIReduction" },
            { label: "Translation Services", link: "/TranslationOverview" },
          ],
        },
        {
          label: "Publication Support",
          link: "/PackageService",
          subMenu: [
            { label: "Publication Packages", link: "/PackageService" },
            { label: "Journal Selection", link: "/JournalSel" },
            { label: "Journal Submission", link: "/JournalSub" },
            { label: "Peer Review & Pre Submission", link: "/PeerReview" },
            { label: "Response to Reviewer", link: "/ResponseToReviewer" },
            { label: "Formatting", link: "/Formatting" },
            { label: "Citation Booster", link: "/CitationBooster" },
            { label: "Poster Creation & Design", link: "/PosterCreation" },
            { label: "Illustration Services", link: "/MedicalDesign" },
          ],
        },
        {
          label: "Scientific / Academic Writing",
          link: "/scientificAcademicOverview",
          subMenu: [
            {
              label: "Scientific / Academic Writing Overview ",
              link: "/scientificAcademicOverview",
            },
            { label: "Writing Assistance", link: "/Writing" },
            { label: "Medical Writing Assistance", link: "/MedicalWrite" },
            {
              label: "Scientific & Academic Writing Assistance",
              link: "/ScientificWriting",
            },
            { label: "Technical Writing Assistance", link: "/TechnicalWriting" },
            { label: "Rewriting Assistance", link: "/MedicalRewrite" },
          ],
        },
        {
          label: "Research & Statistical Analysis",
          link: "/ResearchSupportOverview",
          subMenu: [
            {
              label: "Research Support Overview",
              link: "/ResearchSupportOverview",
            },
            { label: "Statistical Analysis", link: "/StatisticalAnalysis" },
            { label: "Systematic Review", link: "/SystematicReview" },
            { label: "Meta Analysis", link: "/MetaAnalysis" },
            { label: "Data Analysis", link: "/DataAnalysis" },
          ],
        },
        {
          label: "Thesis & Dissertation Services",
          link: "/ThesisDissertOverview",
          subMenu: [
            {
              label: "Thesis and Dissertation Overview",
              link: "/ThesisDissertOverview",
            },
            { label: "PhD Thesis", link: "/PHDThesis" },
            { label: "Master Thesis", link: "/MasterThesis" },
          ],
        },
        {
          label: "High-Impact Services",
          link: "/HighImpactOverview",
          subMenu: [
            {
              label: "High-Impact Journal Overview",
              link: "/HighImpactOverview",
            },
            { label: "High-Impact Scientific Editing", link: "/HighImpact" },
            {
              label: "High-Impact Journal Publication Support",
              link: "/HighImpactJournal",
            },
          ],
        },
      ],
    },
    {
      label: "QUALITY",
      subMenu: [
        { label: "Quality & Delivery", link: "/QualityDelivery" },
        {
          label: "Request a Sample Editing",
          link: "https://secure.manuscriptedit.com/samplework",
        },
        { label: "FAQs", link: "/FAQ" },
        { label: "How We Work", link: "/Process" },
        { label: "Service Guarantee", link: "/QualityAssurance" },
        { label: "Editorial Process", link: "/Process" },
        { label: "Confidentiality", link: "/Security" },
        { label: "Refund & Cancellation", link: "/RefundAndCancellation" },
        { label: "Testimonial", link: "/Testimonial" },
      ],
    },
    {
      label: "PRICE CALCULATOR",
      subMenu: [
        { label: "Price Calculator", link: "/Prices" },
        {
          label: "Submit Manuscript",
          link: "https://manuscriptedit.com/AuthorDashboard/",
        },
        {
          label: "Quotation",
          link: "https://www.secure.manuscriptedit.com/quotation",
        },
        { label: "Payment Method", link: "/PaymentMethod" },
        { label: "Discount & Offers", link: "/Discount" },
      ],
    },
    {
      label: "EDITOR",
      subMenu: [
        { label: "Editor Profile", link: "/EditorialPanel" },
        { label: "Editor Panel", link: "/EditPanel" },
        {
          label: "New Editor",
          link: "https://manuscriptedit.com/AuthorDashboard/1",
        },
        {
          label: "Editor Login",
          link: "https://secure.manuscriptedit.com/logineditor",
        },
        { label: "Careers", link: "/Career" },
      ],
    },
    {
      label: "MORE",
      subMenu: [
        { label: "About Us", link: "/About" },
        { label: "Client List", link: "/ClientList" },
        { label: "Recent Partners", link: "/PartnerRecent" },
        { label: "Contact Us", link: "/ContactUs" },
        { label: "News & Conferences", link: "/NewsPromotions" },
        {
          label: "Referral Partner Program",
          link: "https://manuscriptedit.com/AuthorDashboard/",
        },
        { label: "Global Partner Program", link: "/GlobalPartner2" },
        {
          label: "Webinar Registration",
          link: "https://secure.manuscriptedit.com/wregistration",
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
          link: "/EditingOverview",
          subMenu: [
            { label: "Editing Overview", link: "/EditingOverview" },
            { label: "Proofreading", link: "/ProofReading" },
            { label: "Copyediting", link: "/CopyEdit" },
            { label: "Substantive Editing", link: "/SubEditing" },
            {
              label: "Extensive Substantive Editing",
              link: "/ExtensiveSubstantiveEditing",
            },
            {
              label: "Plagiarism Check and Reduction",
              link: "/PlagiarismCheckReduction",
            },
            { label: "A.I Reduction", link: "/AIReduction" },
            { label: "Translation Services", link: "/TranslationOverview" },
          ],
        },
        {
          label: "Publication Support",
          link: "/PackageService",
          subMenu: [
            { label: "Publication Packages", link: "/PackageService" },
            { label: "Journal Selection", link: "/JournalSel" },
            { label: "Journal Submission", link: "/JournalSub" },
            { label: "Peer Review & Pre Submission", link: "/PeerReview" },
            { label: "Response to Reviewer", link: "/ResponseToReviewer" },
            { label: "Formatting", link: "/Formatting" },
            { label: "Citation Booster", link: "/CitationBooster" },
            { label: "Poster Creation & Design", link: "/PosterCreation" },
            { label: "Illustration Services", link: "/MedicalDesign" },
          ],
        },
        {
          label: "Scientific / Academic Writing",
          link: "/scientificAcademicOverview",
          subMenu: [
            {
              label: "Scientific / Academic Writing Overview ",
              link: "/scientificAcademicOverview",
            },
            { label: "Writing Assistance", link: "/Writing" },
            { label: "Medical Writing Assistance", link: "/MedicalWrite" },
            {
              label: "Scientific & Academic Writing Assistance",
              link: "/ScientificWriting",
            },
            { label: "Technical Writing Assistance", link: "/TechnicalWriting" },
            { label: "Rewriting Assistance", link: "/MedicalRewrite" },
          ],
        },
        {
          label: "Research & Statistical Analysis",
          link: "/ResearchSupportOverview",
          subMenu: [
            {
              label: "Research Support Overview",
              link: "/ResearchSupportOverview",
            },
            { label: "Statistical Analysis", link: "/StatisticalAnalysis" },
            { label: "Systematic Review", link: "/SystematicReview" },
            { label: "Meta Analysis", link: "/MetaAnalysis" },
            { label: "Data Analysis", link: "/DataAnalysis" },
          ],
        },
        {
          label: "Thesis & Dissertation Services",
          link: "/ThesisDissertOverview",
          subMenu: [
            {
              label: "Thesis and Dissertation Overview",
              link: "/ThesisDissertOverview",
            },
            { label: "PhD Thesis", link: "/PHDThesis" },
            { label: "Master Thesis", link: "/MasterThesis" },
          ],
        },
        {
          label: "High-Impact Services",
          link: "/HighImpactOverview",
          subMenu: [
            {
              label: "High-Impact Journal Overview",
              link: "/HighImpactOverview",
            },
            { label: "High-Impact Scientific Editing", link: "/HighImpact" },
            {
              label: "High-Impact Journal Publication Support",
              link: "/HighImpactJournal",
            },
          ],
        },
      ],
    },
    {
      label: "QUALITY",
      subMenu: [
        { label: "Quality & Delivery", link: "/QualityDelivery" },
        {
          label: "Request a Sample Editing",
          link: "https://secure.manuscriptedit.com/samplework",
        },
        { label: "FAQs", link: "/FAQ" },
        { label: "How We Work", link: "/Process" },
        { label: "Service Guarantee", link: "/QualityAssurance" },
        { label: "Editorial Process", link: "/Process" },
        { label: "Confidentiality", link: "/Security" },
        { label: "Refund & Cancellation", link: "/RefundAndCancellation" },
        { label: "Testimonial", link: "/Testimonial" },
      ],
    },
    {
      label: "PRICE CALCULATOR",
      subMenu: [
        { label: "Price Calculator", link: "/Prices" },
        {
          label: "Submit Manuscript",
          link: "https://manuscriptedit.com/AuthorDashboard/",
        },
        {
          label: "Quotation",
          link: "https://www.secure.manuscriptedit.com/quotation",
        },
        { label: "Payment Method", link: "/PaymentMethod" },
        { label: "Discount & Offers", link: "/Discount" },
      ],
    },
    {
      label: "EDITOR",
      subMenu: [
        { label: "Editor Profile", link: "/EditorialPanel" },
        { label: "Editor Panel", link: "/EditPanel" },
        {
          label: "New Editor",
          link: "https://manuscriptedit.com/AuthorDashboard/1",
        },
        {
          label: "Editor Login",
          link: "https://secure.manuscriptedit.com/logineditor",
        },
        { label: "Careers", link: "/Career" },
      ],
    },
    {
      label: "MORE",
      subMenu: [
        { label: "About Us", link: "/About" },
        { label: "Client List", link: "/ClientList" },
        { label: "Recent Partners", link: "/PartnerRecent" },
        { label: "Contact Us", link: "/ContactUs" },
        { label: "News & Conferences", link: "/NewsPromotions" },
        {
          label: "Referral Partner Program",
          link: "https://manuscriptedit.com/AuthorDashboard/",
        },
        { label: "Global Partner Program", link: "/GlobalPartner2" },
        {
          label: "Webinar Registration",
          link: "https://secure.manuscriptedit.com/wregistration",
        },
        {
          label: "Scholar Hangout",
          link: "https://scholar-hangout.manuscriptedit.com",
        },
      ],
    },
  ];

 
  
  export default menu;


  