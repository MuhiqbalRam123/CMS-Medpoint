import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase'; // Supabase client setup
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any>(null); // Replace `any` with a stricter type if available
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch user session and user data
    const fetchUserData = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error) {
        console.error('Error fetching session:', error.message);
        navigate('/login'); // Redirect if an error occurs
        return;
      }//
      if (session?.user) {
        // Fetch user data from Supabase database
        const { data, error: userError } = await supabase
        .from('doctor') // Update to match your table name
        .select('*')
        .eq('id', session.user.id)
        
        ; // Match the user ID in your databas
        console.log('result:', data);
        
        if (userError) {
          console.error('Error fetching user data:', userError.message);
        } else {
          setUserData(data); // Set the user data
    
        }
      } else {
        navigate('/login'); // Redirect to login if no user session exists
      }

      setLoading(false);
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>No user data found.</div>;
  }

  return (
    <div className="dashboard">
      <h1>Welcome to your Dashboard, </h1>
      <p>Name: iqbal</p>
      {/* Add more user details or UI as needed */}
    </div>
  );
};

export default Dashboard;
