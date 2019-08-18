import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
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
});

export default styles;
