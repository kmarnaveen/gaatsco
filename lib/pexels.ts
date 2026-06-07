/** Pexels CDN URLs — free to use per https://www.pexels.com/license/ */
export function pexelsImage(photoId: number, width = 1260) {
  return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=${width}`
}

export const blogImages = {
  audit: {
    id: 5561913,
    credit: "Leeloo The First",
    alt: "Magnifying glass reviewing financial charts and statistical data",
  },
  accounting: {
    id: 7063776,
    credit: "Dziana Hasanbekava",
    alt: "Professional writing in an account book at a desk",
  },
  payroll: {
    id: 6476587,
    credit: "Tima Miroshnichenko",
    alt: "Business professional using a calculator for payroll and finance",
  },
  financialStatements: {
    id: 7681091,
    credit: "Kaboompics",
    alt: "Team reviewing financial documents with graphs and statistics",
  },
  financialAnalysis: {
    id: 6801643,
    credit: "Hanna Pad",
    alt: "Person analyzing business reports and charts on a laptop",
  },
} as const
