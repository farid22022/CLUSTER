// import { createContext, useEffect, useState } from "react";
// import { 
//   GoogleAuthProvider, 
//   createUserWithEmailAndPassword, 
//   getAuth, 
//   onAuthStateChanged, 
//   signInWithEmailAndPassword, 
//   signInWithPopup, 
//   signOut, 
//   updateProfile 
// } from "firebase/auth";
// import { app } from "../firebase/firebase.config";
// import useAxiosPublic from "../Hooks/useAxiosPublic";
// import axios from "axios";

// export const AuthContext = createContext(null);

// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const googleProvider = new GoogleAuthProvider();
//     const axiosPublic = useAxiosPublic();

//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     }

//     const signIn = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     }

//     const googleSignIn = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider);
//     }

//     const logOut = () => {
//         setLoading(true);
//         return signOut(auth);
//     }

//     const updateUserProfile = async (name, photo) => {
//         try {
//             if (!auth.currentUser) {
//                 throw new Error('No authenticated user found');
//             }
//             await updateProfile(auth.currentUser, {
//                 displayName: name, 
//                 photoURL: photo
//             });
//             // Update local user state
//             setUser(prev => ({
//                 ...prev,
//                 displayName: name,
//                 photoURL: photo
//             }));
//             return true;
//         } catch (error) {
//             console.error('Error updating profile:', error);
//             throw error;
//         }
//     }

//     // Save user profile to database
//     const saveUserProfile = async (profileData) => {
//     try {
//         const response = await axiosPublic.post('/users', profileData);
//         return response.data;
//     } catch (error) {
//         console.error('Error saving user profile:', error);
//         throw error; // Re-throw the error to be caught in the component
//     }
// };

//     // Get user profile from database
//     const getUserProfile = async (email) => {
//         try {
//             const response = await axios.post('https://localhost:5000/users', { email });
//             return response.data;
//         } catch (error) {
//             console.error('Error fetching user profile:', error);
//             return null;
//         }
//     }

//     // Update user profile in database
//     const updateUserProfileData = async (email, updatedData) => {
//         try {
//             const response = await axiosPublic.patch(`/users/${email}`, updatedData);
//             return response.data;
//         } catch (error) {
//             console.error('Error updating user profile:', error);
//             throw error;
//         }
//     }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//             if (currentUser) {
//                 // Get JWT token
//                 const userInfo = { email: currentUser.email };
//                 try {
//                     const tokenResponse = await axiosPublic.post('/jwt', userInfo);
//                     if (tokenResponse.data.token) {
//                         localStorage.setItem('access-token', tokenResponse.data.token);
//                     }
//                 } catch (error) {
//                     console.error('Error getting JWT token:', error);
//                 }
                
//                 // Fetch user profile data
//                 try {
//                     const profileData = await getUserProfile(currentUser.email);
//                     setUser({
//                         ...currentUser,
//                         ...profileData
//                     });
//                 } catch (error) {
//                     console.error('Error fetching profile data:', error);
//                     setUser(currentUser);
//                 }
//             } else {
//                 localStorage.removeItem('access-token');
//                 setUser(null);
//             }
//             setLoading(false);
//         });
//         return () => unsubscribe();
//     }, [axiosPublic]);

//     const authInfo = {
//         user,
//         loading,
//         createUser,
//         signIn,
//         googleSignIn,
//         logOut,
//         updateUserProfile,
//         saveUserProfile,
//         getUserProfile,
//         updateUserProfileData
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;
import { createContext, useEffect, useState } from "react";
import { 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  getAuth, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  updateProfile 
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [creators, setCreators] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isClicked, setIsClicked] = useState(false);
    const [bannerSearchedItems, setBannerSearchedItems] = useState([]);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    // Create user with email/password
    const createUser = async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await handleNewUser(userCredential.user);
            return userCredential;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    }

    // Sign in with email/password
    const signIn = async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            await handleUserAuth(userCredential.user);
            return userCredential;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    }

    // Google sign-in
    const googleSignIn = async () => {
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            await handleUserAuth(result.user);
            return result;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    }

    // Alias for googleSignIn
    const googleLogin = googleSignIn;

    // Log out
    const logOut = async () => {
        setLoading(true);
        try {
            await signOut(auth);
            localStorage.removeItem('access-token');
            setUser(null);
        } catch (error) {
            console.error('Logout error:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    }

    // Update user profile
    const updateUserProfile = async (name, photo) => {
        try {
            if (!auth.currentUser) {
                throw new Error('No authenticated user');
            }
            await updateProfile(auth.currentUser, {
                displayName: name, 
                photoURL: photo
            });
            // Update local user state
            setUser(prev => ({
                ...prev,
                displayName: name,
                photoURL: photo
            }));
        } catch (error) {
            console.error('Profile update error:', error);
            throw error;
        }
    }

    // Handle new user registration
    const handleNewUser = async (user) => {
        await handleUserAuth(user);
        // Additional new user setup can go here
    }

    // Common auth handling for all sign-in methods
    const handleUserAuth = async (user) => {
        try {
            // Get Firebase token
            const firebaseToken = await user.getIdToken();
            
            // Get custom JWT token from your backend
            const tokenResponse = await axiosPublic.post('/jwt', { 
                email: user.email 
            });
            
            if (tokenResponse.data.token) {
                localStorage.setItem('access-token', tokenResponse.data.token);
            }
            
            // Set user state
            setUser(user);
        } catch (error) {
            console.error('Auth handling error:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    }

    // Add axios response interceptor for token refresh
    useEffect(() => {
        const interceptor = axiosPublic.interceptors.response.use(
            response => response,
            async error => {
                const originalRequest = error.config;
                
                if (error.response?.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;
                    
                    try {
                        const user = auth.currentUser;
                        if (user) {
                            const newToken = await user.getIdToken(true);
                            localStorage.setItem('access-token', newToken);
                            return axiosPublic(originalRequest);
                        }
                    } catch (refreshError) {
                        console.error('Token refresh failed:', refreshError);
                        await logOut();
                    }
                }
                
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPublic.interceptors.response.eject(interceptor);
        };
    }, [axiosPublic]);

    // Auth state observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                try {
                    await handleUserAuth(currentUser);
                } catch (error) {
                    console.error('Auth state change error:', error);
                    setUser(null);
                    localStorage.removeItem('access-token');
                }
            } else {
                setUser(null);
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        });
        
        return () => unsubscribe();
    }, [axiosPublic]);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        googleLogin,
        logOut,
        updateUserProfile,
        isClicked, 
        setIsClicked,
        bannerSearchedItems,
        setBannerSearchedItems,
        creators, 
        setCreators
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;