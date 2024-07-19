import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    padding: 10,
    width: '100%',
  },
  navbarButton: {
    color: '#FFF',
    fontSize: 16,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '100%',
    margin: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  menu: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: 250,
    backgroundColor: '#444',
    borderTopRightRadius: 20, // Rounded top right corner
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
  title: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  buttonBox: {
    width: '45%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: '#FFF',
    width: '100%',
    borderRadius: 4,
  },
  inputText: {
    color: '#FFF',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#FFF',
    textAlign: 'left',
  },
  card: {
    backgroundColor: '#FFF',
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
  productCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFF',
  },
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    width: '100%',
  },
  primary: {
    backgroundColor: '#007BFF',
  },
  secondary: {
    backgroundColor: '#6C757D',
  },
  medium: {
    width: '80%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    width: '100%',
  },
  headerText: {
    color: '#FFF',
    fontSize: 24,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  discount: {
    fontSize: 14,
    color: 'red',
  },
  rating: {
    fontSize: 14,
    color: '#888',
  },
  productCardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    marginVertical: 4,
  },
});

export default styles;
