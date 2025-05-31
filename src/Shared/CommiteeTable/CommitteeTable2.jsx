const CommitteeTable2 = () => {
    return (
        <div className="flex justify-center p-4">
            <div className="overflow-x-auto w-full max-w-7xl">
                <h3 className="text-center text-lg font-bold p-2 bg-slate-200">Committee</h3>
                <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
                    {/* Head */}
                    <thead className="bg-gray-200 text-gray-900 text-left bg-gradient-to-r from-green-500 to-indigo-500">
                        <tr>
                            <th className="p-2">Name</th>
                            <th className="p-2">Position</th>
                            <th className="p-2">Role</th>
                            <th className="p-2">Profile</th>
                        </tr>
                    </thead>
                    <tbody className="bg-slate-200">
                        {/* Row 1 */}
                        <tr className="border-b hover:bg-gray-100">
                            <td className="p-2">Dr. Rameswar Debnath</td>
                            <td className="p-2">Professor</td>
                            <td className="p-2">Advisor</td>
                            <td className="p-2 text-center">
                                <img className="w-16 h-16 rounded-full" src="https://i.ibb.co/T2VBJBG/Image-Editor-11.png" alt="Dr. Rameswar Debnath" />
                            </td>
                        </tr>
                        {/* Row 2 */}
                        <tr className="border-b hover:bg-gray-100">
                            <td className="p-2">Dr. Kazi Masudul Alam</td>
                            <td className="p-2">Professor</td>
                            <td className="p-2">Convener</td>
                            <td className="p-2 text-center">
                                <img className="w-16 h-16 rounded-full" src="https://i.ibb.co/bXynWfb/Money.png" alt="Dr. Kazi Masudul Alam" />
                            </td>
                        </tr>
                        {/* Row 3 */}
                        <tr className="border-b hover:bg-gray-100">
                            <td className="p-2">Dr. Manishankar Mondal</td>
                            <td className="p-2">Associate Professor</td>
                            <td className="p-2">Secretary</td>
                            <td className="p-2 text-center">
                                <img className="w-16 h-16 rounded-full" src="https://i.ibb.co/fxTCYwP/Moni.png" alt="Dr. Manishankar Mondal" />
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-100">
                            <td className="p-2">Aminul Islam</td>
                            <td className="p-2">Assistant Professor</td>
                            <td className="p-2">Member</td>
                            <td className="p-2 text-center">
                                <img className="w-16 h-16 rounded-full" src="https://i.ibb.co.com/bLxxCPv/Aminul.png" alt="Aminul Islam" />
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-100">
                            <td className="p-2">Atanu Shome</td>
                            <td className="p-2">Assistant Professor</td>
                            <td className="p-2">Member</td>
                            <td className="p-2 text-center">
                                <img className="w-16 h-16 rounded-full" src="https://i.ibb.co.com/hXNsW0M/465596675-10212002284649793-7774697611792823754-n.jpg" alt="Atanu Shome" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CommitteeTable2;
