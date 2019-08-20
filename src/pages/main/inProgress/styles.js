import {StyleSheet} from 'react-native';

import {colors} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
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
    color: colors.primary
  },
  itemDescription: {
    fontSize: 14,
    color: colors.gray
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
