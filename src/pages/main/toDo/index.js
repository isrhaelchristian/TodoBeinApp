import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import api from '../../../services/api';

import styles from './styles';

export default class ToDo extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      tasks: [],
    };
  }

  componentDidMount() {
    this.makeResquest();
  }

  makeResquest = async () => {
    try {
      const response = await api.get('/todos');
      const todoTasks = response.data.filter(task => task.state === 'todo');
      console.log(todoTasks);
      this.setState({tasks: todoTasks});
    } catch (error) {
      alert(error);
    }
  };

  handleSubmit = async () => {
    const {title, description} = this.state;
    if (title.length === 0 || description.length === 0) {
      alert('Please fill in all fields');
    } else {
      try {
        const response = await api.post('/todos', {
          title,
          description,
          state: 'todo',
        });
        this.setState({
          title: '',
          description: '',
        });
        this.makeResquest();
      } catch (error) {
        alert(error);
      }
    }
  };

  handleTitleChange = title => {
    this.setState({title});
  };

  handleDescriptionChange = description => {
    this.setState({description});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tasksContainer}>
          <FlatList
            style={styles.listContainer}
            data={this.state.tasks}
            keyExtractor={(item, index) => item.title}
            renderItem={({item}) => (
              <View style={styles.listItem}>
                <View style={styles.infoContainer}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemDescription}>{item.description}</Text>
                </View>
                <View style={styles.actionsContainer}>
                  <TouchableOpacity style={styles.iconContainer}>
                    <Icon name="action-redo" size={25} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconContainer}>
                    <Icon name="trash" size={25} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
        <View style={styles.addTaskContainer}>
          <TextInput
            style={styles.input}
            placeholder="Task title"
            value={this.state.title}
            onChangeText={this.handleTitleChange}
            autoCapitalize="words"
            autoCorrect={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Task description"
            value={this.state.description}
            onChangeText={this.handleDescriptionChange}
            autoCapitalize="sentences"
            autoCorrect={true}
          />
          <TouchableOpacity
            style={styles.iconSubmit}
            onPress={this.handleSubmit}>
            <Icon name="check" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
