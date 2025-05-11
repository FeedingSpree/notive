import React, { useState } from 'react';
import {
  View, Text, Image, TouchableOpacity, StyleSheet, Modal, TextInput, ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

export default function Homepage({ route }) {
  const navigation = useNavigation();
  const { profilePic } = route.params || {};

  const [calendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [note, setNote] = useState('');

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    setNote(''); // Reset note
  };

  const saveNote = () => {
    console.log(`Saved note for ${selectedDate}: ${note}`);
    setCalendarVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image
            source={profilePic ? { uri: profilePic } : require('../assets/default.jpg')}
            style={styles.avatar}
          />
          <Text style={styles.username}>username</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <Ionicons name="settings-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Calendar Card */}
      <View style={styles.calendarCard}>
        <Ionicons name="calendar" size={40} color="#fff" style={styles.calendarIcon} />
        <View style={styles.calendarText}>
          <Text style={styles.calendarTitle}>Calendar</Text>
          <Text style={styles.calendarSub}>Add tasks and manage your plans.</Text>
        </View>
        <TouchableOpacity style={styles.editButton} onPress={() => setCalendarVisible(true)}>
          <Text style={styles.editText}>EDIT</Text>
          <Ionicons name="pencil" size={16} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal visible={calendarVisible} animationType="slide">
        <ScrollView contentContainerStyle={styles.modalContainer}>
          <Text style={styles.modalTitle}>Select a Date</Text>
          <Calendar
              onDayPress={handleDayPress}
              markedDates={
                selectedDate
                  ? { [selectedDate]: { selected: true, selectedColor: '#A259FF' } }
                  : {}
              }
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#A259FF',
                selectedDayBackgroundColor: '#A259FF',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#A259FF',
                dayTextColor: '#000000',
                textDisabledColor: '#d9e1e8',
                arrowColor: '#A259FF',
                monthTextColor: '#A259FF',
                indicatorColor: '#A259FF',
                textDayFontWeight: '500',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: 'bold',
                textDayFontSize: 16,
                textMonthFontSize: 18,
                textDayHeaderFontSize: 14,
              }}
            />
          {selectedDate && (
            <>
              <Text style={styles.selectedDate}>Selected Date: {selectedDate}</Text>
              <TextInput
                style={styles.noteInput}
                placeholder="Enter your note..."
                value={note}
                onChangeText={setNote}
                multiline
              />
              <TouchableOpacity style={styles.saveNoteButton} onPress={saveNote}>
                <Text style={styles.saveNoteText}>Save Note</Text>
              </TouchableOpacity>
            </>
          )}
          <TouchableOpacity onPress={() => setCalendarVisible(false)} style={{ marginTop: 20 }}>
            <Text style={{ color: 'red', textAlign: 'center' }}>Close</Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>

      {/* Spacer */}
      <View style={styles.flexSpace} />

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Todo")}>
          <Ionicons name="list-outline" size={24} color="#5A189A" />
          <Text style={styles.navText}>To Do</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("InProgress")}>
          <Ionicons name="time-outline" size={24} color="#5A189A" />
          <Text style={styles.navText}>In Progress</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Complete")}>
          <Ionicons name="checkmark-done-outline" size={24} color="#5A189A" />
          <Text style={styles.navText}>Complete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F4FB',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#A259FF',
    paddingHorizontal: 16,
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
  },
  username: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  calendarCard: {
    backgroundColor: '#A259FF',
    margin: 20,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  calendarIcon: {
    marginBottom: 10,
  },
  calendarText: {
    alignItems: 'center',
  },
  calendarTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  calendarSub: {
    color: '#fff',
    fontSize: 12,
  },
  editButton: {
    marginTop: 15,
    backgroundColor: '#D291FF',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  editText: {
    color: '#fff',
    fontWeight: '600',
  },
  flexSpace: {
    flex: 1,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#5A189A',
    fontSize: 12,
    marginTop: 2,
  },
  modalContainer: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  selectedDate: {
    fontSize: 16,
    color: '#5A189A',
    marginTop: 10,
  },
  noteInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    height: 100,
    textAlignVertical: 'top',
  },
  saveNoteButton: {
    backgroundColor: '#A259FF',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  saveNoteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
