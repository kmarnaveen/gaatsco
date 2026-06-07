import { blogImages, pexelsImage } from "@/lib/pexels"

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  publishedAt: string
  author: string
  image: string
  imageAlt: string
  imageCredit?: string
  contactService: string
  content: BlogSection[]
}

export type BlogSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }

export const blogs: BlogPost[] = [
  {
    slug: "how-to-prepare-for-your-next-audit",
    title: "How to Prepare for Your Next Audit Without the Last-Minute Panic",
    excerpt:
      "Audits don't have to be stressful. Here's a practical checklist to get your documentation, reconciliations, and team ready — weeks before the auditor arrives.",
    category: "Audit Support",
    readTime: "6 min read",
    publishedAt: "2026-05-28",
    author: "GAATSCO Team",
    image: pexelsImage(blogImages.audit.id),
    imageAlt: blogImages.audit.alt,
    imageCredit: blogImages.audit.credit,
    contactService: "Audit Support Services",
    content: [
      {
        type: "paragraph",
        text: "If the word \"audit\" makes your stomach drop, you're not alone. Most business owners associate audits with frantic document searches, late nights, and awkward conversations with auditors. But it doesn't have to be that way.",
      },
      {
        type: "paragraph",
        text: "With the right preparation — started early and done systematically — an audit can be a smooth, even useful, process. At GAATSCO, we've helped hundreds of clients walk into audits confident and prepared. Here's what actually works.",
      },
      { type: "heading", text: "Start 8–12 Weeks Before the Audit Date" },
      {
        type: "paragraph",
        text: "The biggest mistake businesses make is waiting until the auditor sends a request list. By then, you're reacting instead of preparing. Start your prep at least two months out by reviewing the prior year's audit findings and ensuring those issues were resolved.",
      },
      {
        type: "list",
        items: [
          "Reconcile all bank, credit card, and loan accounts through the latest month",
          "Ensure accounts receivable and payable aging reports are current",
          "Verify fixed asset registers match physical inventory",
          "Confirm all major contracts and lease agreements are filed and accessible",
        ],
      },
      { type: "heading", text: "Organize Documentation by Category" },
      {
        type: "paragraph",
        text: "Auditors think in categories. When your documents are organized the same way, you save everyone time and project a professional image. Create folders (physical or digital) for: revenue, expenses, payroll, fixed assets, debt, equity, and tax filings.",
      },
      {
        type: "paragraph",
        text: "Digital organization is especially valuable. A shared cloud folder with clear naming conventions — like \"2025-26 / Q3 / Bank Statements / HDFC\" — means anyone on your team can find what the auditor needs without calling you.",
      },
      { type: "heading", text: "Reconcile, Reconcile, Reconcile" },
      {
        type: "paragraph",
        text: "Unreconciled accounts are the number one source of audit delays and findings. Every balance sheet account should tie to a supporting schedule. If your general ledger shows ₹50 lakhs in accounts receivable, you need an aging report that adds up to exactly ₹50 lakhs.",
      },
      { type: "heading", text: "Prepare Your Team" },
      {
        type: "paragraph",
        text: "Auditors will have questions. Make sure the right people are available — your accountant for technical queries, your operations head for inventory questions, and HR for payroll matters. Brief your team on what to expect so nobody is caught off guard.",
      },
      { type: "heading", text: "When to Bring in Audit Support" },
      {
        type: "paragraph",
        text: "If your internal team is already stretched thin, bringing in audit support professionals isn't a sign of weakness — it's smart resource management. GAATSCO's audit support services handle pre-audit preparation, reconciliation support, and auditor query responses so you can focus on running your business.",
      },
      {
        type: "paragraph",
        text: "Ready to make your next audit the smoothest one yet? Book a free consultation with our team — we'll review your current readiness and outline exactly what you need.",
      },
    ],
  },
  {
    slug: "signs-your-business-needs-professional-accounting",
    title: "5 Signs Your Business Has Outgrown DIY Accounting",
    excerpt:
      "Spreadsheets worked when you started. But as you grow, these five warning signs mean it's time for professional accounting support.",
    category: "Accounting",
    readTime: "5 min read",
    publishedAt: "2026-04-15",
    author: "GAATSCO Team",
    image: pexelsImage(blogImages.accounting.id),
    imageAlt: blogImages.accounting.alt,
    imageCredit: blogImages.accounting.credit,
    contactService: "Accounting",
    content: [
      {
        type: "paragraph",
        text: "Every successful business starts with someone wearing multiple hats — founder, salesperson, and yes, part-time accountant. That scrappy approach works until it doesn't. And the transition from DIY to professional accounting often happens quietly, until a missed deadline or a cash flow surprise forces the issue.",
      },
      {
        type: "paragraph",
        text: "Here are five clear signs that your business is ready for professional accounting support.",
      },
      { type: "heading", text: "1. You're Not Sure How Much Money You Actually Have" },
      {
        type: "paragraph",
        text: "If checking your bank balance is the closest thing you have to financial reporting, that's a problem. Profitable businesses can still run out of cash because revenue and cash flow are different things. Professional accounting gives you real-time visibility into what's coming in, what's going out, and what's actually yours.",
      },
      { type: "heading", text: "2. Tax Season Is Always a Scramble" },
      {
        type: "paragraph",
        text: "If your team spends weeks before every filing deadline digging through receipts and emails, you're paying for disorganization twice — once in stress, and once in potential penalties. Ongoing bookkeeping means tax season becomes a formality, not a fire drill.",
      },
      { type: "heading", text: "3. You've Had Compliance Close Calls" },
      {
        type: "paragraph",
        text: "Missed GST deadlines, late TDS deposits, or incorrect filings aren't just administrative hiccups — they carry real financial penalties and can affect your business reputation. If you've had even one close call, your compliance process needs professional oversight.",
      },
      { type: "heading", text: "4. You're Making Growth Decisions Without Financial Data" },
      {
        type: "paragraph",
        text: "Should you hire that next employee? Can you afford to expand? Is that new product line profitable? Without accurate, up-to-date financial statements, you're guessing. Professional accounting turns gut feelings into informed decisions backed by numbers.",
      },
      { type: "heading", text: "5. Your Time Is Worth More Than the Savings" },
      {
        type: "paragraph",
        text: "Calculate how many hours you or your team spend on bookkeeping each month. Multiply by your hourly value. For most growing businesses, that number exceeds the cost of outsourcing — and you get better accuracy and compliance as a bonus.",
      },
      { type: "heading", text: "Making the Switch Is Easier Than You Think" },
      {
        type: "paragraph",
        text: "At GAATSCO, we onboard new clients smoothly — reviewing your existing records, setting up proper systems, and taking over day-to-day accounting without disrupting your operations. Most clients wonder why they didn't make the switch sooner.",
      },
    ],
  },
  {
    slug: "payroll-compliance-india-employer-guide",
    title: "Payroll Compliance in India: What Every Employer Must Know in 2026",
    excerpt:
      "PF, ESI, TDS, professional tax — Indian payroll compliance is complex. This guide breaks down what you owe, when it's due, and how to avoid costly mistakes.",
    category: "Payroll Management",
    readTime: "7 min read",
    publishedAt: "2026-03-10",
    author: "GAATSCO Team",
    image: pexelsImage(blogImages.payroll.id),
    imageAlt: blogImages.payroll.alt,
    imageCredit: blogImages.payroll.credit,
    contactService: "Payroll Management",
    content: [
      {
        type: "paragraph",
        text: "Payroll in India isn't just about transferring salaries. Every month, employers navigate a web of statutory deductions, filings, and deposits — and the rules change more often than most people realize. Get it wrong, and you're looking at interest, penalties, and unhappy employees.",
      },
      { type: "heading", text: "The Core Statutory Components" },
      {
        type: "paragraph",
        text: "Most Indian employers need to manage at least four key compliance areas as part of payroll processing:",
      },
      {
        type: "list",
        items: [
          "Provident Fund (PF): Mandatory for establishments with 20+ employees. Both employer and employee contribute 12% of basic wages.",
          "Employee State Insurance (ESI): Applies to employees earning up to ₹21,000/month in eligible establishments.",
          "Tax Deducted at Source (TDS): Salary TDS must be calculated, deducted, and deposited monthly with quarterly returns filed.",
          "Professional Tax: Varies by state — Telangana, Maharashtra, Karnataka, and others each have their own slabs and due dates.",
        ],
      },
      { type: "heading", text: "Monthly vs. Quarterly Obligations" },
      {
        type: "paragraph",
        text: "Some payroll compliances are monthly (PF and ESI deposits, TDS payments), while others are quarterly (TDS returns) or annual (Form 16 issuance, PF annual returns). Missing a single deadline can trigger cascading penalties — PF late deposits attract 12% annual interest plus damages.",
      },
      { type: "heading", text: "Common Payroll Mistakes We See" },
      {
        type: "list",
        items: [
          "Including non-wage components incorrectly in PF calculations",
          "Missing ESI coverage when employee count crosses thresholds",
          "Incorrect TDS calculations after mid-year salary revisions",
          "Failing to issue compliant payslips with required statutory breakdowns",
          "Not maintaining proper attendance and leave records for audits",
        ],
      },
      { type: "heading", text: "Why Outsourcing Payroll Makes Sense" },
      {
        type: "paragraph",
        text: "Payroll errors don't just cost money — they erode employee trust. When payslips are late, deductions are wrong, or Form 16 has errors, your team notices. Professional payroll management ensures accuracy, timeliness, and full statutory compliance every cycle.",
      },
      {
        type: "paragraph",
        text: "GAATSCO handles end-to-end payroll for businesses across India — from salary processing and payslip generation to PF, ESI, and TDS compliance. We stay current on regulatory changes so you don't have to.",
      },
    ],
  },
  {
    slug: "financial-statement-preparation-sme-guide",
    title: "Financial Statement Preparation: A Practical Guide for SMEs",
    excerpt:
      "Balance sheets, P&L, cash flow — what each statement tells you, why accuracy matters, and how to prepare them properly for your business.",
    category: "Financial Reporting",
    readTime: "6 min read",
    publishedAt: "2026-02-20",
    author: "GAATSCO Team",
    image: pexelsImage(blogImages.financialStatements.id),
    imageAlt: blogImages.financialStatements.alt,
    imageCredit: blogImages.financialStatements.credit,
    contactService: "Financial Statement Preparation",
    content: [
      {
        type: "paragraph",
        text: "Financial statements are the scorecard of your business. Whether you're applying for a loan, pitching to investors, or simply trying to understand if you're profitable, well-prepared financial statements are non-negotiable. Yet many SMEs treat them as an annual afterthought.",
      },
      { type: "heading", text: "The Three Core Financial Statements" },
      {
        type: "paragraph",
        text: "Every business should maintain three interconnected statements:",
      },
      {
        type: "list",
        items: [
          "Balance Sheet: A snapshot of what you own (assets), what you owe (liabilities), and what's left for owners (equity) at a specific date.",
          "Profit & Loss Statement (P&L): Shows revenue, expenses, and profit or loss over a period — typically a month, quarter, or year.",
          "Cash Flow Statement: Tracks actual cash moving in and out, revealing whether your business generates enough cash to sustain operations.",
        ],
      },
      { type: "heading", text: "Why Accuracy Matters Beyond Compliance" },
      {
        type: "paragraph",
        text: "Yes, financial statements are required for tax filings and statutory audits. But their real value is decision-making. An inaccurate P&L might show you're profitable when you're actually bleeding cash. A balance sheet with misclassified assets can mislead lenders into rejecting a loan you should qualify for.",
      },
      { type: "heading", text: "The Preparation Process" },
      {
        type: "paragraph",
        text: "Proper financial statement preparation follows a structured process:",
      },
      {
        type: "list",
        items: [
          "Close all books for the period — no open transactions",
          "Reconcile every balance sheet account to supporting documentation",
          "Accrue for expenses incurred but not yet paid (and vice versa)",
          "Depreciate fixed assets per applicable accounting standards",
          "Prepare notes to accounts explaining significant policies and balances",
          "Have statements reviewed for consistency across all three reports",
        ],
      },
      { type: "heading", text: "Ind AS vs. Non-Ind AS: Know Your Requirements" },
      {
        type: "paragraph",
        text: "Depending on your company's size, turnover, and borrowing, you may need to prepare statements under Indian Accounting Standards (Ind AS) rather than traditional GAAP. Getting this wrong can invalidate your filings and create audit findings.",
      },
      { type: "heading", text: "Get Expert Help Before You Need It" },
      {
        type: "paragraph",
        text: "Don't wait until a bank deadline or audit request to prepare your statements. GAATSCO prepares accurate, standards-compliant financial statements on a monthly, quarterly, or annual basis — so you're always ready when opportunity or obligation knocks.",
      },
    ],
  },
  {
    slug: "why-financial-statement-analysis-matters",
    title: "Why Financial Statement Analysis Matters More Than You Think",
    excerpt:
      "Preparing statements is step one. Understanding what they reveal about your business health, risks, and opportunities — that's where real value lives.",
    category: "Financial Reporting",
    readTime: "5 min read",
    publishedAt: "2026-01-08",
    author: "GAATSCO Team",
    image: pexelsImage(blogImages.financialAnalysis.id),
    imageAlt: blogImages.financialAnalysis.alt,
    imageCredit: blogImages.financialAnalysis.credit,
    contactService: "Financial Statement Services",
    content: [
      {
        type: "paragraph",
        text: "Many business owners treat financial statements as a box to check — something the accountant prepares once a year for the tax filing. But the businesses that grow strategically are the ones that read their financials like a story. Every ratio, trend, and line item tells you something about where you've been and where you're heading.",
      },
      { type: "heading", text: "Beyond the Numbers: What Analysis Reveals" },
      {
        type: "paragraph",
        text: "Financial statement analysis goes deeper than preparing reports. It answers questions like: Is my business getting more or less profitable over time? Am I collecting receivables fast enough? Do I have enough liquidity to survive a slow quarter? Am I carrying too much debt?",
      },
      { type: "heading", text: "Key Ratios Every Business Owner Should Know" },
      {
        type: "list",
        items: [
          "Gross Profit Margin: Shows how efficiently you produce or deliver your product/service",
          "Current Ratio: Measures ability to pay short-term obligations (aim for 1.5–2.0)",
          "Debt-to-Equity Ratio: Reveals how much of your business is funded by debt vs. owner investment",
          "Days Sales Outstanding (DSO): How long it takes to collect payment — lower is better",
          "Operating Cash Flow Ratio: Whether operations generate enough cash to cover liabilities",
        ],
      },
      { type: "heading", text: "Trend Analysis: One Number Isn't Enough" },
      {
        type: "paragraph",
        text: "A single month's profit figure means little on its own. What matters is the trend. Are margins improving or shrinking? Is revenue growing faster than expenses? Is cash flow keeping pace with reported profit? Comparing 3–6 periods side by side reveals patterns that a single snapshot hides.",
      },
      { type: "heading", text: "When Investors and Lenders Look at Your Numbers" },
      {
        type: "paragraph",
        text: "If you're seeking funding — whether a bank loan, investor capital, or a partnership — your financial statement analysis is your credibility test. Lenders don't just want statements; they want to see that you understand your own business. Management reports with commentary demonstrate that you're in control.",
      },
      { type: "heading", text: "How GAATSCO Helps You See the Full Picture" },
      {
        type: "paragraph",
        text: "Our financial statement services go beyond preparation. We provide ratio analysis, trend reporting, and management commentary that turns raw numbers into actionable insights. Whether you need investor-ready financials or monthly management reports, we help you understand — not just report — your business performance.",
      },
      {
        type: "paragraph",
        text: "Want to know what your financials are really telling you? Schedule a free review with our team and we'll walk you through the key metrics for your business.",
      },
    ],
  },
]

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((blog) => blog.slug === slug)
}

export function getLatestBlogs(count = 5): BlogPost[] {
  return [...blogs]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count)
}

export function formatBlogDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}
