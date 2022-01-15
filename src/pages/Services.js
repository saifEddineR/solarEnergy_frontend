import '../css/service.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Services = () => {
  // const services = useSelector((state) => state.auth.services);
  return (
    <div>
      <div className='service-title'>
        <h2>Services</h2>
        <p>Audit, Monitoring, Diagnosis ...</p>
      </div>
      <div className='services-container'>
        <div className='ServiceCardPage serviceCard-commun'>
          <span className='services-switch1'>
            <img
              src='https://www.ibc-solar.com/fileadmin/_processed_/6/3/csm_home-with-solar-installation-and-solar-storage_54b696517a.jpg'
              alt='esteem'
            />
          </span>
          <span className='services-switch2'>
            <h5>Calculate YOUR savings potential </h5>
            <p>
              Find out how much you can reduce your energy costs in just a few clicks.
              <br />
              Calculating what that potential looks like for you is a breeze. Just put a
              few details into our solar energy calculator,
              <br /> and you'll discover how much you'll save on energy costs by producing
              clean electricity for self-consumption.
            </p>
            <Link to='/esteem'>
              <Button variant='info'>Energy calculator</Button>
            </Link>
          </span>
        </div>
        <div className='ServiceCardPageR serviceCard-commun'>
          <span className='services-switch2'>
            <h5>Energetic audience </h5>
            <p>
              An energy audit generally leads to the identification of the technical and
              financial measures necessary to obtain energy savings. It also makes it
              possible to identify the possibilities of reducing an establishment's energy
              bill through projects that can serve as models for all firms in the same
              sector. This approach is effective insofar as it does not boil down to an
              administrative or technical examination, but leads to a global approach that
              the company must follow, to reduce its energy consumption accompanied by
              technical advice and financial assistance. to investment.
            </p>
          </span>
          <span className='services-switch1'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvT8bpHlhOwnN2ngfc51UdETS3hRth-31nIA&usqp=CAU'
              alt='service'
            />
          </span>
        </div>
        <div className='ServiceCardPage serviceCard-commun'>
          <span className='services-switch1'>
            <img
              src='https://cdn.infratec.eu/_processed_/f/3/csm_thermography-building-infratec-building-facade-04_be1e3d6322.jpg'
              alt='service'
            />
          </span>
          <span className='services-switch2'>
            <h5>Thermal monitoring of buildings </h5>
            <p>
              The energy efficiency program in buildings aims to improve the thermal
              behavior of residential and tertiary buildings through the development of
              thermal regulations adapted to the climatic contexts of the country. This
              objective is achievable given that Tunisia has a relatively moderate climate
              which allows the use of materials and construction techniques which
              contribute to the reduction of the energy needs of the building through a
              considered architectural design adapted to the local climatic regions.
            </p>
          </span>
        </div>
        <div className='ServiceCardPageR serviceCard-commun'>
          <span className='services-switch2'>
            <h5>Diagnosis of water systems </h5>
            <p>
              The purpose of the diagnosis of water systems is to identify the state of
              play of the water supply service and to propose appropriate technical
              solutions allowing a justified choice to be made regarding the future
              directions of supply management. in water.
            </p>
          </span>
          <span className='services-switch1'>
            <img
              src='https://d1v1e13ebw3o15.cloudfront.net/data/32530/pool_and_spa_master/adobestock_102784556.jpg'
              alt='service'
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
