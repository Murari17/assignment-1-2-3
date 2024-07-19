import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './styles';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Osama bin Laden',
    email: 'osamabeenlagging@gmail.com',
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
      <View style={styles.box}>
        <Text style={styles.heading}>Profile</Text>
        {isEditing ? (
          <>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              style={[styles.input, styles.inputText]}
              value={editProfile.name}
              onChangeText={(text) => handleInputChange('name', text)}
              placeholder="Enter your name"
              placeholderTextColor="#888"
            />
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={[styles.input, styles.inputText]}
              value={editProfile.email}
              onChangeText={(text) => handleInputChange('email', text)}
              placeholder="Enter your email"
              placeholderTextColor="#888"
            />
            <View style={styles.buttonContainer}>
              <Button title="Save" onPress={handleSave} />
              <Button title="Cancel" onPress={handleEditToggle} />
            </View>
          </>
        ) : (
          <>
            <Text style={styles.label}>Name: {profile.name}</Text>
            <Text style={styles.label}>Email: {profile.email}</Text>
            <Button title="Edit" onPress={handleEditToggle} />
          </>
        )}
      </View>
    </View>
  );
};

export default Profile;
