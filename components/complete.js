import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CachingScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'GEE quiz 5', dueDate: 'Already Done', color: '#DC3545', completed: true },
    { id: '2', title: 'CS 401 Assignment', dueDate: 'Already Done', color: '#0D6EFD', completed: true },
    { id: '3', title: 'IT 001 Project', dueDate: 'Already Done', color: '#198754', completed: true },
  ]);

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://i.pinimg.com/736x/d8/c6/e6/d8c6e6e340b8f4f835ad15ea57c204c3.jpg' }}
            style={styles.avatar}
          />
          <Text style={styles.username}>username</Text>
        </View>
      </View>

      
      <View style={styles.tasksContainer}>

        <View style={styles.taskList}>
          {tasks.map((task) => (
            <View key={task.id} style={styles.taskItemWrapper}>
              <View style={styles.taskItem}>
                <View style={[styles.taskBorder, { backgroundColor: task.color }]} />
                <View style={styles.taskContent}>
                  <Text style={[styles.taskTitle, { color: task.color }]}>{task.title}</Text>
                </View>
                <View style={[styles.dueDateContainer, { backgroundColor: task.color }]}>
                  <Text style={styles.dueDate}>{task.dueDate}</Text>
                </View>
                <TouchableOpacity 
                  style={styles.checkboxContainer}
                  onPress={() => toggleTaskCompletion(task.id)}
                >
                  <View style={styles.checkbox}>
                    {task.completed && (
                      <Ionicons name="checkmark" size={16} color="#A259FF" />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.blackShadowRight}></View>
              <View style={styles.blackShadowBottom}></View>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity 
        style={styles.returnButton}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Text style={styles.returnButtonText}>Return</Text>
      </TouchableOpacity>
      
      <View style={styles.flexSpace} />

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Todo")}>
          <Ionicons name="list-outline" size={24} color="#A259FF" />
          <Text style={styles.navText}>To Do</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("InProgress")}>
          <Ionicons name="time-outline" size={24} color="#A259FF" />
          <Text style={[styles.navText, styles.activeNavText]}>In Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeNavItem}>
          <Ionicons name="checkmark-done-outline" size={24} color="#A259FF" />
          <Text style={styles.navText}>Complete</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F4FB',
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  pageTitle: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  header: {
    backgroundColor: '#A259FF',
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: 'flex-start',
    borderBottomLeftRadius: 400,
    borderBottomRightRadius: 400,
    height: 165,
    marginLeft: -70,
    width: 370,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 70,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  username: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 15,
  },
  clockIconContainer: {
    position: 'absolute',
    right: 20,
    top: 195, 
    zIndex: 10, 
  },
  purpleCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#A259FF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  tasksContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    alignSelf: 'center',
    padding: 16,
    marginTop: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A259FF', 
    marginBottom: 16,
    textShadowColor: 'rgba(162, 89, 255, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  taskList: {
    gap: 12,
  },
  taskItemWrapper: {
    position: 'relative',
    marginBottom: 15,
    paddingRight: 3,
    paddingBottom: 3,
  },
  taskItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    height: 60,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    zIndex: 2,
  },
  blackShadowRight: {
    position: 'absolute',
    top: 3,
    bottom: 0,
    right: 0,
    width: 3,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomRightRadius: 8,
    zIndex: 1,
  },
  blackShadowBottom: {
    position: 'absolute',
    bottom: 0,
    left: 3,
    right: 0,
    height: 3,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    zIndex: 1,
  },
  taskBorder: {
    width: 8,
    height: '100%',
  },
  taskContent: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dueDateContainer: {
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 10,
  },
  dueDate: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  checkboxContainer: {
    paddingRight: 15,
    paddingLeft: 5,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#A259FF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  returnButton: {
    backgroundColor: '#A259FF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 30,
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  returnButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
    paddingVertical: 6,
  },
  activeNavItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#A259FF',
  },
  navText: {
    color: '#A259FF',
    fontSize: 12,
    marginTop: 4,
  },
  activeNavText: {
    fontWeight: 'bold',
  },
});

export default CachingScreen;