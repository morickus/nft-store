import '@emotion/react'
import { AliasToken, OverrideToken } from 'antd';

declare module '@emotion/react' {
  export interface Theme {
    token: Partial<AliasToken>;
    components: OverrideToken;
  }
}
