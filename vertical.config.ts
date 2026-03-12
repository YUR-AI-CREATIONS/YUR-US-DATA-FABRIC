import { VerticalConfig } from '../vertical.config';

const usDataFabric: VerticalConfig = {
  id: 'yur-us-data-fabric',
  name: 'YUR-US-DATA-FABRIC',
  tagline: 'The Connective Tissue of American Data',
  icon: '🗺️',
  primaryColor: '#00CED1',
  accentColor: '#1A1A2E',
  bgGradient: 'linear-gradient(135deg, #0A0A1A 0%, #00CED1 50%, #1A1A2E 100%)',
  systemInstruction: `You are YUR-US-DATA-FABRIC, a sovereign data aggregation and analysis platform for United States public data. You weave together Census demographics, BLS employment statistics, FRED economic indicators, USGS geographic data, and dozens of other federal data sources into a unified queryable fabric. You enable cross-agency analysis that individual government APIs cannot provide alone.`,
  complianceStandards: [
    'FOIA (Freedom of Information Act)',
    'Privacy Act of 1974',
    'OMB Circular A-130 (Federal Information Management)',
    'OPEN Government Data Act',
    'Paperwork Reduction Act',
    'Federal Data Strategy (2020-2024)',
    'CIPSEA (Confidential Information Protection and Statistical Efficiency Act)'
  ],
  agents: [
    {
      name: 'DATA_AGGREGATOR',
      role: 'Multi-Agency Federal Data Integration',
      systemPrompt: 'You ingest and normalize data from 50+ federal APIs — Census, BLS, FRED, SEC EDGAR, EPA, USDA, and more. You handle inconsistent schemas, varying geographic granularities (national/state/county/tract/block), and temporal misalignment across agencies to produce unified datasets.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'CENSUS_ANALYST',
      role: 'Demographic & Population Intelligence',
      systemPrompt: 'You analyze Census Bureau data — ACS 5-year estimates, decennial census, population projections, and demographic trends. You compute diversity indices, migration patterns, housing characteristics, and income distributions at any geographic level from national to census block.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'ECONOMIC_TRACKER',
      role: 'Macroeconomic & Labor Market Analyst',
      systemPrompt: 'You track economic indicators from FRED and BLS — GDP, CPI, unemployment, labor force participation, job openings, and wage growth. You build composite economic health scores, detect recession signals, and produce metro-area economic profiles combining employment, housing, and business formation data.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'GEOGRAPHIC_MAPPER',
      role: 'Geospatial Analysis & Visualization',
      systemPrompt: 'You perform geospatial analysis using TIGER/Line shapefiles, USGS elevation data, and EPA environmental layers. You compute drive-time isochrones, identify food deserts, map broadband coverage gaps, and overlay demographic data onto geographic boundaries for spatial intelligence.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'US Census Bureau API',
      type: 'api',
      endpoint: 'https://api.census.gov/data',
      description: 'ACS, decennial census, population estimates, economic census, housing surveys'
    },
    {
      name: 'Bureau of Labor Statistics',
      type: 'api',
      endpoint: 'https://api.bls.gov/publicAPI/v2',
      description: 'Employment, wages, CPI, PPI, occupational data, and labor force statistics'
    },
    {
      name: 'FRED (Federal Reserve Economic Data)',
      type: 'api',
      endpoint: 'https://api.stlouisfed.org/fred',
      description: '800K+ economic time series — GDP, interest rates, money supply, housing starts, trade data'
    },
    {
      name: 'USGS National Map',
      type: 'api',
      endpoint: 'https://apps.nationalmap.gov/services',
      description: 'Topographic data, elevation models, hydrography, land cover, and geographic names'
    },
    {
      name: 'Data.gov Catalog',
      type: 'api',
      endpoint: 'https://catalog.data.gov/api/3',
      description: 'Metadata catalog for 300K+ federal datasets across all agencies'
    }
  ],
  outputFormats: [
    'Demographic Profile Reports',
    'Economic Health Scorecards',
    'Cross-Agency Data Fusion Tables',
    'Choropleth Map Visualizations',
    'Time Series Trend Analyses',
    'Geographic Disparity Reports',
    'FOIA-Compliant Data Exports'
  ],
  defaultModel: 'ORACLE_PRIME',
  features: {
    videoGen: false,
    tts: true,
    imageGen: true,
    maps: true,
    search: true,
    governance: true,
    stripe: true
  }
};

export default usDataFabric;
