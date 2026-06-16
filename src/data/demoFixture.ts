export type ARStatus = 'ok' | 'warn' | 'alert'
export type CrewStatus = 'top' | 'good' | 'ok' | 'alert'

export interface InvoiceDetail {
  customer: string
  invoiceNum: string
  date: string
  amount: number
  daysOverdue: number
  jobType: string
  note?: string
}

export interface RecentJob {
  date: string
  type: string
  customer: string
  revenue: number
  margin: number
}

// Internally reconciled demo data for a fictional residential + commercial cleaning company.
// Sized to a relatable ~$816K/yr operation (most cleaning companies run $400K–$1.2M).
// Crew revenue, job-type revenue, and monthly total all sum to $68,000.
// Crew job counts and job-type job counts both sum to 312.
export const demoFixture = {
  business: {
    name: 'Coastline Cleaning Co.',
    lastSynced: 'Today at 7:58 AM',
  },
  connectors: [
    { name: 'QuickBooks Online', connected: true },
    { name: 'Jobber', connected: true },
    { name: 'Google Business', connected: true },
    { name: 'Angi', connected: true },
    { name: 'BrightLocal', connected: true },
    { name: 'Gmail', connected: true },
  ],
  revenue: {
    thisMonth: 68000,
    lastMonth: 60800,
    cashPosition: 36400,
    arAging: [
      {
        label: 'Current (0–30 days)',
        amount: 18400,
        invoices: null,
        status: 'ok' as ARStatus,
        invoiceDetails: null,
      },
      {
        label: '30–60 days',
        amount: 9800,
        invoices: 3,
        status: 'warn' as ARStatus,
        invoiceDetails: [
          { customer: 'Brightline Offices', invoiceNum: 'INV-1847', date: 'Mar 19', amount: 3800, daysOverdue: 34, jobType: 'Commercial Contract' },
          { customer: 'Sunset Lakes Property Mgmt', invoiceNum: 'INV-1831', date: 'Mar 8', amount: 3400, daysOverdue: 45, jobType: 'Move-Out Turns (6 units)' },
          { customer: 'Coral Gables Dental', invoiceNum: 'INV-1829', date: 'Mar 4', amount: 2600, daysOverdue: 49, jobType: 'Office Deep Clean' },
        ] as InvoiceDetail[],
      },
      {
        label: '60+ days',
        amount: 6200,
        invoices: 2,
        status: 'alert' as ARStatus,
        invoiceDetails: [
          { customer: 'Marina Tower HOA', invoiceNum: 'INV-1801', date: 'Feb 12', amount: 4400, daysOverdue: 69, jobType: 'Common-Area Contract' },
          { customer: 'Compass Realty', invoiceNum: 'INV-1788', date: 'Jan 28', amount: 1800, daysOverdue: 84, jobType: 'Listing Turn', note: 'Disputed' },
        ] as InvoiceDetail[],
      },
    ],
    weeklyRevenue: [
      { week: 'Feb 24', revenue: 13800 },
      { week: 'Mar 3', revenue: 13200 },
      { week: 'Mar 10', revenue: 14600 },
      { week: 'Mar 17', revenue: 15200 },
      { week: 'Mar 24', revenue: 14800 },
      { week: 'Mar 31', revenue: 15600 },
      { week: 'Apr 7', revenue: 16200 },
      { week: 'Apr 14', revenue: 16800 },
    ],
  },
  crews: [
    {
      name: "Maria's Crew",
      jobs: 72,
      revenue: 19800,
      avgJobValue: 275,
      margin: 55,
      status: 'top' as CrewStatus,
      recentJobs: [
        { date: 'Apr 8', type: 'Commercial Contract', customer: 'Brightline Offices', revenue: 1100, margin: 62 },
        { date: 'Apr 6', type: 'Recurring (weekly)', customer: 'Bartlett Residence', revenue: 165, margin: 58 },
        { date: 'Apr 4', type: 'Office Deep Clean', customer: 'Wynwood Coworking', revenue: 850, margin: 56 },
        { date: 'Apr 2', type: 'Recurring (biweekly)', customer: 'Casa Marina', revenue: 150, margin: 60 },
        { date: 'Mar 29', type: 'Commercial Contract', customer: 'Coral Gables Dental', revenue: 700, margin: 54 },
      ] as RecentJob[],
    },
    {
      name: "Ana's Crew",
      jobs: 84,
      revenue: 18200,
      avgJobValue: 217,
      margin: 46,
      status: 'good' as CrewStatus,
      recentJobs: [
        { date: 'Apr 9', type: 'Deep Clean', customer: 'The Hendersons', revenue: 380, margin: 49 },
        { date: 'Apr 6', type: 'Move-Out', customer: 'Sunset Lakes #214', revenue: 460, margin: 43 },
        { date: 'Apr 3', type: 'Recurring (weekly)', customer: 'Ridgewood Home', revenue: 175, margin: 53 },
        { date: 'Mar 30', type: 'Office Contract', customer: 'Marina Tower Lobby', revenue: 720, margin: 45 },
        { date: 'Mar 27', type: 'Airbnb Turnover', customer: 'South Beach Loft', revenue: 110, margin: 48 },
      ] as RecentJob[],
    },
    {
      name: "Carla's Crew",
      jobs: 92,
      revenue: 16400,
      avgJobValue: 178,
      margin: 42,
      status: 'good' as CrewStatus,
      recentJobs: [
        { date: 'Apr 9', type: 'Move-Out', customer: 'Sunset Lakes #118', revenue: 480, margin: 39 },
        { date: 'Apr 7', type: 'One-Time Standard', customer: 'Alvarez Residence', revenue: 210, margin: 44 },
        { date: 'Apr 3', type: 'Recurring (biweekly)', customer: 'Palm Court Condo', revenue: 160, margin: 47 },
        { date: 'Mar 29', type: 'Move-Out', customer: 'Sunset Lakes #309', revenue: 500, margin: 37 },
        { date: 'Mar 25', type: 'Deep Clean', customer: 'Coconut Grove Home', revenue: 420, margin: 41 },
      ] as RecentJob[],
    },
    {
      name: "Jasmine's Crew",
      jobs: 64,
      revenue: 13600,
      avgJobValue: 213,
      margin: 28,
      status: 'alert' as CrewStatus,
      recentJobs: [
        { date: 'Apr 8', type: 'Move-Out', customer: 'Compass Realty listing', revenue: 520, margin: 19 },
        { date: 'Apr 5', type: 'Post-Construction', customer: 'Edgewater Build', revenue: 1400, margin: 22 },
        { date: 'Apr 1', type: 'Move-Out (redo)', customer: 'Sunset Lakes #402', revenue: 460, margin: 8 },
        { date: 'Mar 28', type: 'Recurring (weekly)', customer: 'Brickell Apt', revenue: 170, margin: 40 },
        { date: 'Mar 24', type: 'One-Time Standard', customer: 'Doral Townhome', revenue: 230, margin: 30 },
      ] as RecentJob[],
    },
  ],
  teamAvgMargin: 44,
  jobTypes: [
    { type: 'Recurring (Residential)', jobs: 198, revenue: 26400, margin: 56 },
    { type: 'Commercial Contract', jobs: 16, revenue: 17600, margin: 50 },
    { type: 'Deep / Move-Out', jobs: 48, revenue: 16000, margin: 36 },
    { type: 'One-Time Standard', jobs: 50, revenue: 8000, margin: 30 },
  ],
  marketing: {
    summary: '$3,280 spent across 4 channels → 61 leads → $54 blended CPL → 2.4× blended ROAS',
    channels: [
      { name: 'Google Ads', spend: 2200, leads: 24, cpl: 92, convRate: 0.25, bookedRev: 5500, roas: 2.5, status: 'good' as const },
      { name: 'Google Business', spend: 0, leads: 18, actions: 742, calls: 61, directions: 104, status: 'top' as const },
      { name: 'Angi', spend: 1080, leads: 12, cpl: 90, convRate: 0.13, bookedRev: 2200, roas: 2.0, status: 'ok' as const },
      { name: 'Website', spend: 0, leads: 7, sessions: 248, convRate: 0.028, bookedRev: 2400, status: 'ok' as const },
    ],
    weeklyLeadsByChannel: [
      { week: 'Feb 24', googleAds: 3, gbp: 3, angi: 2, website: 1 },
      { week: 'Mar 3',  googleAds: 4, gbp: 3, angi: 2, website: 1 },
      { week: 'Mar 10', googleAds: 3, gbp: 4, angi: 2, website: 1 },
      { week: 'Mar 17', googleAds: 3, gbp: 4, angi: 1, website: 1 },
      { week: 'Mar 24', googleAds: 3, gbp: 4, angi: 2, website: 2 },
      { week: 'Mar 31', googleAds: 3, gbp: 5, angi: 1, website: 1 },
      { week: 'Apr 7',  googleAds: 3, gbp: 5, angi: 2, website: 2 },
      { week: 'Apr 14', googleAds: 2, gbp: 4, angi: 1, website: 2 },
    ],
    trendInsight: 'Google Ads CPL held at $92 while GBP organic leads grew 30% with $0 incremental spend. Your map pack is doing the work your ad budget used to.',
    localSEO: {
      avgPackPosition: 3.4,
      avgPositionDelta: -0.5,
      keywordsInTop3: 6,
      keywordsInTop10: 15,
      keywordsTracked: 38,
      citationAccuracy: 0.93,
      citationCount: 41,
      topKeywords: [
        { keyword: 'house cleaning miami', position: 3, delta: 1 },
        { keyword: 'deep cleaning services miami', position: 5, delta: -1 },
        { keyword: 'move out cleaning near me', position: 8, delta: 0 },
        { keyword: 'maid service coral gables', position: 4, delta: 2 },
        { keyword: 'office cleaning miami', position: 6, delta: 1 },
      ],
      goalLine: "A few keywords away from owning Miami's cleaning map pack.",
    },
    organic: {
      impressions: 14200,
      impressionsDelta: 0.11,
      clicks: 820,
      clicksDelta: 0.07,
      ctr: 0.058,
      topPages: [
        { path: '/house-cleaning-miami', clicks: 188 },
        { path: '/services/deep-cleaning', clicks: 116 },
        { path: '/services/move-out-cleaning', clicks: 84 },
      ],
    },
  },
  digest: {
    ownerName: 'Alex',
    date: 'Tuesday, April 22',
    yesterdayRevenue: 2840,
    cashPosition: 36400,
    outstandingInvoices: 34400,
    overdueCount: 5,
    topPerformer: { name: "Maria's Crew", margin: 55, label: 'MTD' },
    alert: { name: "Jasmine's Crew", margin: 28, jobs: 64 },
  },
}
