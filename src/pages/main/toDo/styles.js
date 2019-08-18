import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  tasksContainer: {
    width: '100%',
    height: '70%',
  },
  listContainer: {
    width: '100%',
  },
  listItem: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 25,
  },
  infoContainer: {
    width: '70%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '30%',
  },
  iconContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTaskContainer: {
    width: '100%',
    height: '30%',
    paddingTop: 10,
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    marginBottom: 10,
    marginHorizontal: 20,
    fontSize: 16,
  },
  iconSubmit: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#ccc',
  },
});

export default styles;
