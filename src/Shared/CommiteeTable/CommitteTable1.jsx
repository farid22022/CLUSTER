import React, { useState, useEffect } from "react";

const CommitteeTable1 = ({ members, title }) => {
    const [advisor, setAdvisor] = useState([]);
    const [committee, setCommittee] = useState([]);

    useEffect(() => {
        if (members) {
            const advisorData = members.find((member) => member.role === "Advisor");
            setAdvisor(advisorData?.members || []);

            const committeeData = members.find((member) => member.role === "Committee");
            setCommittee(committeeData?.members || []);
        }
    }, [members]);
    
    return (
        <div className="flex justify-center p-4 text-base w-full">
            <div className="w-full max-w-7xl"> {/* Set a maximum width for the container */}
                <table className="bg-white shadow-md rounded-lg w-full"> {/* Ensure table takes full width */}
                    <thead>
                        <tr>
                            <th colSpan="3" className="text-center p-4 bg-gray-200 text-lg font-semibold">
                                {title}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Advisor Row */}
                        <tr className="bg-gradient-to-r from-green-500 to-indigo-500">
                            <td colSpan="6" className="text-center p-6">
                                <div className="flex flex-wrap justify-center gap-4">
                                    {advisor.map((advisor, index) => (
                                        <div key={index} className="flex flex-col items-center w-full md:w-1/2 lg:w-1/3">
                                            <img
                                                src={advisor?.img || "/default/path"}
                                                alt={advisor?.advisor || "Advisor"}
                                                className="w-20 h-20 rounded-full"
                                            />
                                            <h3 className="text-xl font-medium">{advisor.act || "Advisor"}</h3>
                                            <h3 className="text-xl font-medium">{advisor.advisor || "Advisor"}</h3>
                                        </div>
                                    ))}
                                </div>
                            </td>
                        </tr>

                        {/* Committee Table */}
                        <tr>
                            <td colSpan="6" className="text-center">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full bg-gray-100 rounded-lg">
                                        <thead>
                                            <tr>
                                                <th colSpan="4" className="text-center p-4 bg-gray-200 text-lg font-semibold">
                                                    Committee
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-base-200 text-center bg-gradient-to-r from-green-500 to-indigo-500">
                                                <th>Student ID</th>
                                                <th>Role</th>
                                                <th>Name</th>
                                                <th>Image</th>
                                            </tr>
                                            {committee.map((member, index) => (
                                                <tr className="text-center" key={index}>
                                                    <td>{member.id}</td>
                                                    <td>{member.position || "Member"}</td>
                                                    <td>{member.name}</td>
                                                    <td>
                                                        <img src={member.img || "/default/path"} alt={member.name} className="w-12 h-12 rounded-full"/>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CommitteeTable1;
