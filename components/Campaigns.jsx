import Image from 'next/image';
import Title from './ui/Title';
import { MdShoppingCart } from "react-icons/md";
const CampaignsItem =()=>{
    return (
        <div className='bg-secondary flex-1 flex rounded-md py-5 px-[15px] items-center'>
        <div className="after:content-[''] border-[5px] border-primary rounded-full overflow-hidden mx-5">
        <Image alt="" src="/images/o1.jpg" width={100} height={100}className="hover:scale-105 transition-all"/>
        </div>
        <div className='text-white'>
        <Title addClass="text-2xl">Pizza</Title>
        <div className="font-dancing my-1">
          <span className="text-[40px]">20%</span>
        </div>
        <button className="btn-order flex items-center gap-x-2">
          Order Now <MdShoppingCart size={20} />
        </button>
        </div>
        </div>
    )
}
const Campaigns = () => {
  return (
  <div className="flex justify-between container mx-auto py-20 gap-6 flex-wrap">
    <CampaignsItem />
    <CampaignsItem />
  </div>
  )
}

export default Campaigns