//image imports
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { RiSurgicalMaskLine } from 'react-icons/ri';
import { FaPeopleArrows } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { HiOutlineOfficeBuilding, HiOutlineTrash } from 'react-icons/hi';
import { ImMeter2 } from 'react-icons/im';
import { MdCleaningServices } from 'react-icons/md';
import { GiTowTruck } from 'react-icons/gi';

export const GridData = [
    {
        image: <AiOutlineExclamationCircle className="grid-image" />,
        title: 'MUNICIPAL ELECTIONS UNOFFICIAL RESULTS',
        info: 'We have unofficial results for the Municipal Election on Tuesday, December XX.'
    },
    {
        image: <RiSurgicalMaskLine className="grid-image" />,
        title: 'INDOOR MASK MANDATE',
        info: 'Face masks are required in all indoor public settings in the City of Los Angeles.'
    },
    {
        image: <FaPeopleArrows className="grid-image" />,
        title: 'COVID-19 VACCINE INFORMATION',
        info: 'We have vaccine safety information, as well as a map and list of vaccination sites from eligible residents in Los Angeles.'
    },
    {
        image: <GoLocation className="grid-image" />,
        title: 'COVID-19 TESTING SITES',
        info: 'The City of Los Angeles has partnered with community health centers, hospitals, and pharmacies to increase access to COVID-19 testing for residents.'
    },
    {
        image: <HiOutlineOfficeBuilding className="grid-image" />,
        title: 'CITY HALL OPERATING HOURS',
        info: 'Los Angeles City Hall is now open to public Monday through Friday from 9a.m. - 5p.m.'
    },
    {
        image: <HiOutlineTrash className="grid-image" />,
        title: 'TRASH AND RECYCLING',
        info: 'Pickup is on a normal schedule.'
    },
    {
        image: <ImMeter2 className="grid-image" />,
        title: 'PARKING METERS',
        info: 'Parking meters are running on their normal schedules today.'
    },
    {
        image: <MdCleaningServices className="grid-image" />,
        title: 'STREET CLEANING',
        info: 'Street cleaning is on a normal schedule.'
    },
    {
        image: <GiTowTruck className="grid-image" />,
        title: 'TOW LOT',
        info: 'The tow lot is only open Monday through Friday, from 7a.m. - 10:30p.m. Automated kiosks are available 24 hours a day, seven days a week for vehicle releases.'
    },

]