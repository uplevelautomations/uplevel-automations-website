export type ARStatus = 'ok' | 'warn' | 'alert'
export type TechStatus = 'top' | 'good' | 'ok' | 'alert'

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

export const demoFixture = {
  business: {
    name: 'Ridgeline Services',
    lastSynced: 'Today at 7:58 AM',
  },
  connectors: [
    { name: 'QuickBooks Online', connected: true },
    { name: 'ServiceTitan', connected: true },
    { name: 'Google Business', connected: true },
    { name: 'Angi', connected: true },
    { name: 'BrightLocal', connected: true },
    { name: 'Gmail', connected: true },
  ],
  revenue: {
    thisMonth: 204800,
    lastMonth: 178400,
    cashPosition: 91200,
    arAging: [
      {
        label: 'Current (0–30 days)',
        amount: 42800,
        invoices: null,
        status: 'ok' as ARStatus,
        invoiceDetails: null,
      },
      {
        label: '30–60 days',
        amount: 28400,
        invoices: 3,
        status: 'warn' as ARStatus,
        invoiceDetails: [
          { customer: 'Meridian Property Group', invoiceNum: 'INV-2847', date: 'Mar 19', amount: 12400, daysOverdue: 34, jobType: 'Commercial HVAC Service' },
          { customer: 'Brookfield Estates', invoiceNum: 'INV-2831', date: 'Mar 8', amount: 9200, daysOverdue: 45, jobType: 'New Installation' },
          { customer: 'Carlson Mechanical', invoiceNum: 'INV-2829', date: 'Mar 4', amount: 6800, daysOverdue: 49, jobType: 'Maintenance Agreement' },
        ] as InvoiceDetail[],
      },
      {
        label: '60+ days',
        amount: 18600,
        invoices: 2,
        status: 'alert' as ARStatus,
        invoiceDetails: [
          { customer: 'Summit Commercial LLC', invoiceNum: 'INV-2801', date: 'Feb 12', amount: 14800, daysOverdue: 69, jobType: 'Commercial Retrofit' },
          { customer: 'Hartwell Properties', invoiceNum: 'INV-2788', date: 'Jan 28', amount: 3800, daysOverdue: 84, jobType: 'Diagnostic/Repair', note: 'Disputed' },
        ] as InvoiceDetail[],
      },
    ],
    weeklyRevenue: [
      { week: 'Feb 24', revenue: 128400 },
      { week: 'Mar 3', revenue: 118200 },
      { week: 'Mar 10', revenue: 142600 },
      { week: 'Mar 17', revenue: 168400 },
      { week: 'Mar 24', revenue: 154800 },
      { week: 'Mar 31', revenue: 178400 },
      { week: 'Apr 7', revenue: 196200 },
      { week: 'Apr 14', revenue: 204800 },
    ],
  },
  technicians: [
    {
      name: 'Mike R.',
      jobs: 68,
      revenue: 74800,
      avgJobValue: 1100,
      margin: 54,
      status: 'top' as TechStatus,
      recentJobs: [
        { date: 'Apr 8', type: 'Maintenance Plan', customer: 'Ridgeline Corp HQ', revenue: 4200, margin: 68 },
        { date: 'Apr 4', type: 'New Installation', customer: 'Oakwood Medical Ctr', revenue: 9800, margin: 61 },
        { date: 'Mar 30', type: 'Maintenance Plan', customer: 'Summit Office Park', revenue: 3600, margin: 71 },
        { date: 'Mar 26', type: 'Diagnostic', customer: 'Lakeview Condos', revenue: 2400, margin: 52 },
        { date: 'Mar 22', type: 'Maintenance Plan', customer: 'Harbor Business Ctr', revenue: 3800, margin: 66 },
      ] as RecentJob[],
    },
    {
      name: 'Sarah K.',
      jobs: 58,
      revenue: 61200,
      avgJobValue: 1055,
      margin: 49,
      status: 'good' as TechStatus,
      recentJobs: [
        { date: 'Apr 9', type: 'Diagnostic/Repair', customer: 'Westside Retail Ctr', revenue: 3200, margin: 54 },
        { date: 'Apr 6', type: 'New Installation', customer: 'Parkview Medical', revenue: 7400, margin: 46 },
        { date: 'Mar 31', type: 'Maintenance Plan', customer: 'Bayside Apartments', revenue: 2800, margin: 52 },
        { date: 'Mar 27', type: 'Diagnostic', customer: 'City Center Mall', revenue: 1800, margin: 49 },
        { date: 'Mar 23', type: 'Emergency Repair', customer: 'Hilton Downtown', revenue: 4200, margin: 38 },
      ] as RecentJob[],
    },
    {
      name: 'Tom B.',
      jobs: 74,
      revenue: 64400,
      avgJobValue: 870,
      margin: 42,
      status: 'ok' as TechStatus,
      recentJobs: [
        { date: 'Apr 9', type: 'Emergency Repair', customer: 'Sunrise Plaza', revenue: 2200, margin: 36 },
        { date: 'Apr 7', type: 'Diagnostic', customer: 'Northgate Shopping', revenue: 1600, margin: 44 },
        { date: 'Apr 3', type: 'Maintenance Plan', customer: 'Clearwater Offices', revenue: 3200, margin: 48 },
        { date: 'Mar 29', type: 'Emergency Repair', customer: 'Metro Hotel', revenue: 3800, margin: 31 },
        { date: 'Mar 25', type: 'New Installation', customer: 'Riverside Condos', revenue: 6200, margin: 41 },
      ] as RecentJob[],
    },
    {
      name: 'Dave L.',
      jobs: 46,
      revenue: 49200,
      avgJobValue: 1070,
      margin: 27,
      status: 'alert' as TechStatus,
      recentJobs: [
        { date: 'Apr 8', type: 'Emergency Repair', customer: 'Westside Mall', revenue: 2840, margin: 18 },
        { date: 'Apr 5', type: 'New Installation', customer: 'Parkview Apartments', revenue: 8200, margin: 22 },
        { date: 'Apr 1', type: 'Emergency Repair', customer: 'Lakeview Condos', revenue: 1960, margin: 24 },
        { date: 'Mar 28', type: 'Maintenance Plan', customer: 'Sunrise Properties', revenue: 3400, margin: 41 },
        { date: 'Mar 24', type: 'Diagnostic', customer: 'Harbor Plaza', revenue: 2100, margin: 31 },
      ] as RecentJob[],
    },
  ],
  teamAvgMargin: 44,
  jobTypes: [
    { type: 'Maintenance Plan', jobs: 152, revenue: 65600, margin: 61 },
    { type: 'Diagnostic/Repair', jobs: 176, revenue: 91200, margin: 47 },
    { type: 'New Installation', jobs: 48, revenue: 74400, margin: 38 },
    { type: 'Emergency Call', jobs: 72, revenue: 44800, margin: 29 },
  ],
  marketing: {
    summary: '$6,690 spent across 4 channels → 102 leads → $66 blended CPL → 2.3× ROAS',
    channels: [
      { name: 'Google Ads', spend: 4800, leads: 38, cpl: 126, convRate: 0.24, bookedRev: 11400, roas: 2.4, status: 'good' as const },
      { name: 'Google Business', spend: 0, leads: 19, actions: 1247, calls: 86, directions: 142, status: 'top' as const },
      { name: 'Angi', spend: 1890, leads: 27, cpl: 70, convRate: 0.14, bookedRev: 4200, roas: 2.2, status: 'good' as const },
      { name: 'Website', spend: 0, leads: 18, sessions: 412, convRate: 0.044, bookedRev: 5800, status: 'ok' as const },
    ],
    weeklyLeadsByChannel: [
      { week: 'Feb 24', googleAds: 5, gbp: 1, angi: 4, website: 1 },
      { week: 'Mar 3',  googleAds: 6, gbp: 2, angi: 3, website: 2 },
      { week: 'Mar 10', googleAds: 5, gbp: 2, angi: 4, website: 2 },
      { week: 'Mar 17', googleAds: 4, gbp: 3, angi: 3, website: 2 },
      { week: 'Mar 24', googleAds: 5, gbp: 3, angi: 4, website: 3 },
      { week: 'Mar 31', googleAds: 4, gbp: 3, angi: 3, website: 2 },
      { week: 'Apr 7',  googleAds: 5, gbp: 3, angi: 4, website: 3 },
      { week: 'Apr 14', googleAds: 4, gbp: 2, angi: 2, website: 3 },
    ],
    trendInsight: 'Google Ads CPL crept from $98 to $126 over 6 weeks. GBP organic leads are up 32% with $0 incremental spend.',
    localSEO: {
      avgPackPosition: 3.2,
      avgPositionDelta: -0.6,
      keywordsInTop3: 8,
      keywordsInTop10: 18,
      keywordsTracked: 42,
      citationAccuracy: 0.94,
      citationCount: 47,
      topKeywords: [
        { keyword: 'hvac repair miami', position: 2, delta: 1 },
        { keyword: 'ac installation miami', position: 4, delta: -1 },
        { keyword: 'emergency hvac near me', position: 7, delta: 0 },
        { keyword: 'ac repair coral gables', position: 3, delta: 2 },
        { keyword: 'hvac maintenance miami', position: 5, delta: 1 },
      ],
      goalLine: "4 keywords away from owning Miami's map pack.",
    },
    organic: {
      impressions: 24800,
      impressionsDelta: 0.12,
      clicks: 1420,
      clicksDelta: 0.08,
      ctr: 0.057,
      topPages: [
        { path: '/hvac-repair-miami', clicks: 312 },
        { path: '/services/ac-installation', clicks: 198 },
        { path: '/services/emergency-hvac', clicks: 142 },
      ],
    },
  },
  digest: {
    ownerName: 'Alex',
    date: 'Tuesday, April 22',
    yesterdayRevenue: 9840,
    cashPosition: 91200,
    outstandingInvoices: 89800,
    overdueCount: 5,
    topPerformer: { name: 'Mike R.', margin: 54, label: 'MTD' },
    alert: { name: 'Dave L.', margin: 27, jobs: 46 },
  },
}
