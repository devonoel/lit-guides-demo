import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorldServer';
import LitGuidesDemo from '../bundles/LitGuidesDemo/components/LitGuidesDemo';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  LitGuidesDemo,
});
