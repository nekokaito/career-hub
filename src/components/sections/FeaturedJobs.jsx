import { useEffect, useState } from "react";
import SectionTitle from "../titles/SectionTitle";
import JobCard from "../cards/JobCard";


const FeaturedJobs = () => {
    
    const [jobs, setJobs] = useState ([]);
    const [dataLength, setDataLength] = useState (4);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('jobs.json');
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);

    return (
        <div className="flex flex-col justify-center item-center gap-11">
            <SectionTitle title={'Featured Jobs'} des ={'Explore thousands of job opportunities with all the information you need. Its your future'}></SectionTitle>
            <div className="grid grid-cols-2 justify-center gap-6">
                {
                    jobs.slice(0,dataLength).map(job => <JobCard key={job.id} job ={job} ></JobCard>)
                }
            </div>
            <div className={dataLength === jobs.length? 'hidden' : 'flex justify-center'}>
                <button  onClick={() => setDataLength(jobs.length)} className="btn btn-primary">Show all</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;