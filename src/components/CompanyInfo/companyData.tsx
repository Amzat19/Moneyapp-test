import { ExampleQueryQuery } from '../../gql/graphql';
import Avatar from "../../assets/Default Avartar.png";

interface QueryType {
    data: ExampleQueryQuery;
}

const CompanyData: React.FC<QueryType> = ({ data }) => {
    return (
        <div className='md:w-[65%] w-[85%] mx-auto pl-8 pb-8 mt-4 md:ml-8 md:pl-28 pt-14 rounded-lg border'>
            <div className='flex mb-8'>
                <img src={Avatar} alt='Company`s logo' />
                <h1 className='self-center ml-4'>{data.company?.name}</h1>
            </div>
            <div className='mb-3'>
                <h3 className='text-[#858585] text-xs'>CEO</h3>
                <p>{data.company?.ceo}</p>
            </div>
            <div>
                <h3 className="text-[#858585] text-xs">CTO</h3>
                <p>{data.company?.cto}</p>
            </div>
        </div>
    )
}

export default CompanyData;