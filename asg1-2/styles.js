import { StyleSheet, Platform, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const isIphoneX = Platform.OS === 'ios' && (height === 812 || height === 896);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#000',
  },
  profileContent: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFF',
    width: '100%',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#FFF',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: '#FFF',
    borderRadius: 4,
    width: '100%',
  },
  inputText: {
    color: '#FFF',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    width: '45%',
  },
  primaryButton: {
    backgroundColor: '#007BFF',
  },
  secondaryButton: {
    backgroundColor: '#6C757D',
  },
  buttonText: {
    color: '#FFF',
  },
  card: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: '100%',
    maxWidth: 160,
    margin: 8,
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 8,
  },
  productCardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    marginVertical: 4,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1,
  },
  menu: {
    position: 'absolute',
    left: 0,
    top: isIphoneX ? 30 : 0,
    bottom: 0,
    width: 250,
    backgroundColor: '#333',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 0,
    justifyContent: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    zIndex: 2,
  },
  menuItem: {
    color: '#FFF',
    fontSize: 18,
    marginVertical: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    padding: 0,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#333', 
    position: 'absolute', 
    top: isIphoneX ? 30 : 0, 
  },
  registerLink: {
    marginTop: 20,
  },
  registerText: {
    color: '#007BFF',
    fontSize: 16,
  },
  navbarButton: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default styles;
