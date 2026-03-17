export interface pdf_feature {
  title: string;
  icon?: string;
  description: string;
  link: string;
}

export const pdfFeatures: pdf_feature[] = [
  {
    title: "Merge PDF",
    icon: "mdi:set-merge",
    description: "Combine multiple PDFs into one",
    link: "/merge"
  }, {
    title: "Split PDF",
    icon: "mdi:set-split",
    description: "Separate one PDFs into multiple PDFs",
    link: "/split"
  }, {
    title: "Sign PDF",
    icon: "mdi:file-sign",
    description: "Sign PDF with image or draw yourself",
    link: "/sign"
  }, {
    title: "PDF to Image",
    icon: "",
    description: "Convert PDF into Image",
    link: "/pdf-to-image"
  }, {
    title: "Image to PDF",
    icon: "",
    description: "Convert Image into PDF",
    link: "/image-to-pdf"
  },
]
