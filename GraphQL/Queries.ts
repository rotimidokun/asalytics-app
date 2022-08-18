import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query MyQuery {
    asalist {
      result {
        assetId
        available
        name
        logo
      }
    }
  }
`;
