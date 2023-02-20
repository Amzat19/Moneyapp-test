import { useExampleQueryQuery } from '../../gql/graphql';
import CompanyData from './companyData';

const ProfileData = () => {
    const { data, error, loading } = useExampleQueryQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return <CompanyData data={data} />;
};

export default ProfileData;