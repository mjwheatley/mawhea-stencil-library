import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-custom-elements'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@mawhea/stencil-library',
      directivesProxyFile: '../angular-workspace/projects/mawhea/stencil-library-angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/mawhea/stencil-library-angular/src/lib/stencil-generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings
    }),
    reactOutputTarget({
      componentCorePackage: '@mawhea/stencil-library',
      proxiesFile: '../react-workspace/stencil-library-react/lib/components/stencil-generated/index.ts',
      includeDefineCustomElements: true
    })
  ]
};
