import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import styles from './styles';

export default class Done extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.listContainer}
          data={[
            {
              title: 'Task 1',
              description: 'Description Task 1',
            },
            {
              title: 'Task 2',
              description: 'Description Task 2',
            },
            {
              title: 'Task 3',
              description: 'Description Task 3',
            },
            {
              title: 'Task 4',
              description: 'Description Task 4',
            },
          ]}
          keyExtractor={(item, index) => item.title}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <View style={styles.infoContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
              </View>
              <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.iconContainer}>
                  <Icon name="action-undo" size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                  <Icon name="trash" size={25} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}
