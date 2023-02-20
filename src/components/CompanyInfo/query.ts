import { gql } from '@apollo/client';

export const QUERY_COMPANY_DETAILS = gql`
    query ExampleQuery {
        company {
            ceo
            cto
            name
        }
    }
`;