import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles'; 

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'ABC',
    email: 'abc@gmail.com',
  });

  const [editProfile, setEditProfile] = useState({ ...profile });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (key, value) => {
    setEditProfile({
      ...editProfile,
      [key]: value,
    });
  };

  const handleSave = () => {
    setProfile(editProfile);
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <View style={styles.profileContent}>
        {isEditing ? (
          <>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              style={styles.input}
              value={editProfile.name}
              onChangeText={(text) => handleInputChange('name', text)}
              placeholder="Enter your name"
              placeholderTextColor="#888"
            />
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              value={editProfile.email}
              onChangeText={(text) => handleInputChange('email', text)}
              placeholder="Enter your email"
              placeholderTextColor="#888"
            />
            <View style={styles.buttonContainer}>
              <Button title="Save" onPress={handleSave} color="#007BFF" />
              <Button title="Cancel" onPress={handleEditToggle} color="#6C757D" />
            </View>
          </>
        ) : (
          <>
            <Text style={styles.label}>Name: {profile.name}</Text>
            <Text style={styles.label}>Email: {profile.email}</Text>
            <Button title="Edit" onPress={handleEditToggle} color="#007BFF" />
          </>
        )}
      </View>
    </View>
  );
};

export default Profile;
