import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TasksActions from '../../../store/ducks/tasks';

import styles from './styles';

class ToDo extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
    };
  }

  componentDidMount() {
    const {loadRequest} = this.props;
    loadRequest();
  }

  handleSubmit = async () => {
    const {title, description} = this.state;
    const {createTask} = this.props;
    if (title.length === 0 || description.length === 0) {
      alert('Please fill in all fields');
    } else {
      try {
        createTask(title, description);
        this.setState({
          title: '',
          description: '',
        });
      } catch (error) {
        alert(error);
      }
    }
  };

  startTask = async task => {
    const {updateTask} = this.props;
    try {
      updateTask(task, 'inprogress');
    } catch (error) {
      alert(error);
    }
  };

  handleDelete = async task => {
    const {deleteTask} = this.props;
    try {
      deleteTask(task.id);
    } catch (error) {
      alert(error);
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
            data={this.props.tasks}
            keyExtractor={(item, index) => item.id + item.title}
            renderItem={({item}) => (
              <View style={styles.listItem}>
                <View style={styles.infoContainer}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemDescription}>{item.description}</Text>
                </View>
                <View style={styles.actionsContainer}>
                  <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => this.startTask(item)}>
                    <Icon name="action-redo" size={25} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => this.handleDelete(item)}>
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

const mapStateToProps = state => ({
  tasks: state.tasks.todoTasks,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TasksActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDo);
