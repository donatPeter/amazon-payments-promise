const apiProd = 'https://api.amazon.com';
const apiSandbox = 'https://api.sandbox.amazon.com';
const reportMwsEndpoint = 'https://mws.amazonservices.com/';
const reportMwsEndpointEU = 'https://mws-eu.amazonservices.com/';
const mwsEndpointSandbox = 'https://mws.amazonservices.com/OffAmazonPayments_Sandbox/2013-01-01';
const mwsEndpointProd = 'https://mws.amazonservices.com/OffAmazonPayments/2013-01-01';
const mwsEndpointSandboxEU = 'https://mws-eu.amazonservices.com/OffAmazonPayments_Sandbox/2013-01-01/';
const mwsEndpointProdEU = 'https://mws-eu.amazonservices.com/OffAmazonPayments/2013-01-01';

export interface IEnvironment {
  mwsEndpoint: string;
  apiEndpoint: string;
  reports: string;
}
export class Environment implements IEnvironment {
  public mwsEndpoint: string;
  public apiEndpoint: string;
  public reports: string;
  constructor(mwsEndpoint: string, apiEndpoint: string, reports: string) {
    this.mwsEndpoint = mwsEndpoint;
    this.apiEndpoint = apiEndpoint;
    this.reports = reports;
  }
}

const Sandbox = new Environment(mwsEndpointSandbox, apiSandbox, reportMwsEndpoint);
const Production = new Environment(mwsEndpointProd, apiProd, reportMwsEndpoint);
const SandboxEU = new Environment(mwsEndpointSandboxEU, apiSandbox, reportMwsEndpointEU);
const ProductionEU = new Environment(mwsEndpointProdEU, apiProd, reportMwsEndpointEU);

export const EnvironmentList: IEnvironmentList = {
  Production,
  ProductionEU,
  Sandbox,
  SandboxEU,
};

export enum EnvironmentEnum {
  Production = 'Production',
  ProductionEU = 'ProductionEU',
  Sandbox = 'Sandbox',
  SandboxEU = 'SandboxEU',
}

interface IEnvironmentList {
  [key: string]: Environment;
}
