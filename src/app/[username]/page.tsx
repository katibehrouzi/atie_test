import { getUser, getUserRepo } from "@/apis/userApis/userApis";
import { AsyncFC } from "@/types/shareTypes";
import Image from "next/image";
import UserRepoListUi from "./components/UserRepoListUi";

const UserName: AsyncFC = async (props) => {
    

    const userInfo = await getUser(props.params.username)
    const userRepoList = await getUserRepo(props.params.username)
    
    
    return (
        <div>
            <div className="flex gap-5 mb-4">
                {
                    userInfo.data.avatar_url &&
                    <Image
                        className="relative"
                        src={userInfo.data.avatar_url}
                        alt="user avatar"
                        width={180}
                        height={37}
                        priority
                    />
                }
            
                <div className="border border-gray-500 p-2 rounded flex-1">
                    <h3 className="text-lg font-bold text-blue-500 border-b border-b-blue-500 mb-2">
                        Info
                    </h3>
                    <div className="grid grid-rows-2 h-full items-start">
                        {
                            userInfo.data.name &&
                            <div className="flex items-center gap-2">
                                <h4 className=" md:text-lg font-bold">
                                    Name: 
                                </h4>
                                <p className="text-sm md:text-base">
                                    {userInfo.data.name}
                                </p>
                            </div>
                        }
                        {
                            userInfo.data.location && 
                            <div className="flex items-center gap-2">
                                <h4 className="md:text-lg font-bold">
                                    Address: 
                                </h4>
                                <p  className="text-sm md:text-base">
                                    {userInfo.data.location}
                                </p>
                            </div>
                        }
                    </div>
                </div>

                
            </div>
            <div className="flex items-center gap-2">
                
                {userInfo.data.public_repos && 
                    <div className="flex items-center text-blue-500 gap-2">
                        <h4 className="md:text-lg font-bold">
                            Repos: 
                        </h4>
                        <p  className="text-sm md:text-base">
                            {userInfo.data.public_repos}
                        </p>
                    </div>
                }
                <hr className="flex-1 border-blue-500" />
            </div>
            
            <div className="border border-gray-500 rounded p-2 w-full h-full">
                
                <UserRepoListUi resData={userRepoList.data} /> 
            
            </div>
            
            
        </div>
    )

}

export default UserName