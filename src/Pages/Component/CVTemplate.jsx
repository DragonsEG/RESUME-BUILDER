import { useUserName, useUserJob, useUserAge, useUserPhone, useUserEmail, useUserAbout, useUserImageUrl } from "../Data/PersonalInformationData";
import { useWebsiteURL, useFacebookURL, useTwitterURL, useLinkedInURL } from '../Data/SocialLinksData';
import { useEmploymentHistory } from "../Data/EmpoymentHistoryData";

function CVTemplate() {
  // Personal information
  const { userName } = useUserName();
  const { userJob } = useUserJob();
  // const { userAge } = useUserAge();
  const { userPhone } = useUserPhone();
  const { userEmail } = useUserEmail();
  const { userImageUrl } = useUserImageUrl();
  const { userAbout } = useUserAbout();

  // Social Links
  const { websiteURL } = useWebsiteURL();
  const { facebookURL } = useFacebookURL();
  const { twitterURL } = useTwitterURL();
  const { linkedInURL } = useLinkedInURL();

  // Employment History
  const { employmentHistory } = useEmploymentHistory();

  return (
    <section style={{ width: `100%` }} className='bg-white max-w-[21cm] h-[27.8cm] p-[50px] box-border break-words '>
      <div className=' flex  gap-20'>
        <div className="w-[150px] h-[150px] box-border rounded-full flex justify-center items-center overflow-hidden">
          <img src={userImageUrl} className="w-full" draggable="false"/>
        </div>
        <div>
          <p className=' font-semibold text-4xl w-[220px]'>{userName}</p>
          <p className='text-2xl mt-5 capitalize'>{userJob}</p>
        </div>
      </div>

      <div className=' flex gap-[15%] mt-[40px]'>
        <div className=' grid gap-[20px] w-[40%] xd:block'>
          <p className=' font-bold pb-[20px] border-b-[1px] border-sky-600 text-[30px] capitalize'>education</p>

          <div>
            <p >2014 - 2020</p>
            <p>degree name</p>
            <p>university name here</p>
          </div>

          <div>
            <p className=' text-slate-600 '>2014 - 2020</p>
            <p className=' text-slate-600 '>degree name</p>
            <p className=' text-slate-600 '>university name here</p>
          </div>

          <div>
            <p className=' text-slate-600 '>2014 - 2020</p>
            <p className=' text-slate-600 '>degree name</p>
            <p className=' text-slate-600 '>university name here</p>
          </div>

          <div>
            <p className='font-bold pb-[20px] border-b-[1px] border-sky-600 text-[30px] capitalize'>contact</p>
            <div className='flex flex-col gap-2 mt-2 text-lg'>
              <a className='text-blue-700 underline' href={`tel:${userPhone}`} >{userPhone}</a>
              <a className='text-blue-700 underline' href={`mailto:${userEmail}`} >{userEmail}</a>
              {(facebookURL !== `` && <a className='text-blue-700 underline' href={facebookURL}>{facebookURL}</a>)}
              {(twitterURL !== `` && <a className='text-blue-700 underline' href={twitterURL}>{twitterURL}</a>)}
              {(linkedInURL !== `` && <a className='text-blue-700 underline' href={linkedInURL}>{linkedInURL}</a>)}
              {(websiteURL !== `` && <a className='text-blue-700 underline' href={websiteURL}>{websiteURL}</a>)}
            </div>
          </div>
        </div>

        <div>
          <p className=' font-bold pb-[20px] border-b-[1px] border-sky-600 mb-[15px] text-[30px] capitalize' > profile </p>

          <p className=' mb-[30px]'> {userAbout} </p>

          <p className='  font-bold pb-[20px] border-b-[1px] border-sky-600 text-[30px] mb-[55px] capitalize' >experience</p>

          <div className='flex gap-[40px]'>
            <div className='grid gap-[55px] xd:block'>
              {employmentHistory.map((ele, idx) => (
                <div key={idx}>
                  <p className=' text-slate-600 '>{ele.startDate} - {ele.endDate}</p>
                  <p className=' text-slate-600 '>{ele.companyName}</p>
                </div>
              ))}
            </div>

            <div className='grid xd:block '>
              <div>
              </div>
              {employmentHistory.map((ele, idx) => (
                <div key={idx}>
                  <p className=' font-bold text-[16px] '>{ele.jobTitle}</p>
                  <p className=' text-slate-600 '>{ele.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CVTemplate;
