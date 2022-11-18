import chair from '../../../assets/images/chair.png';
import background from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selected, setSelected }) => {


    return (
        <header className='mb-16'>
            <div className="hero" style={{ backgroundImage: `url(${background})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='chair' src={chair} className="lg:w-[35%] rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                        ></DayPicker>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;