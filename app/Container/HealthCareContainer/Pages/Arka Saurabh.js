import React from 'react';
import { ScrollView, StyleSheet, Text, View,Image } from 'react-native';

const ArkaSaurabh = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Arka Saurabh</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: '../Images/Arka Saurabh.png' }}
          style={styles.image}
        />
        <Text style={styles.imageCaption}>Arka Saurabh</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Suitable Soil:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>Type: Arka Saurabh tomatoes thrive in well-drained loamy soil with good organic content.</Text>
          <Text style={styles.listItem}>pH: Aim for a slightly acidic to neutral soil pH in the range of 6.0 to 7.0 for optimal nutrient availability.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Temperature:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>Optimal Growing Temperature: Arka Saurabh tomatoes prefer temperatures between 20°C to 30°C.</Text>
          <Text style={styles.listItem}>Seasonal Adaptability: They can be grown in various seasons depending on regional climatic conditions, with adjustments for extreme heat or cold.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Season and Planting Months:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>Planting Time: In India, Arka Saurabh tomatoes can be planted in different seasons depending on the regional climate.</Text>
          <Text style={styles.listItem}>For northern India: February-March for summer cropping and September-October for the winter crop.</Text>
          <Text style={styles.listItem}>For southern India: Planting times may vary based on regional climatic conditions.</Text>
        </View>
        <Text style={styles.paragraph}>Harvesting: Expect a harvest timeline of approximately 60-90 days from transplanting, with fruit production continuing throughout the growing season.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Disease Resistance and Management:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>Disease Resistance: Arka Saurabh tomatoes may exhibit some resistance to common tomato diseases such as early blight, late blight, and Fusarium wilt.</Text>
          <Text style={styles.listItem}>Preventive Measures: Implement cultural practices such as crop rotation, proper sanitation, and adequate spacing to minimize disease incidence.</Text>
          <Text style={styles.listItem}>Fungicides: Use fungicides containing copper or other recommended chemicals as preventive measures against fungal diseases. Apply according to label instructions and local agricultural recommendations.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Pest Management:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>Common Pests: Arka Saurabh tomatoes are susceptible to pests such as aphids, whiteflies, thrips, and fruit borers.</Text>
          <Text style={styles.listItem}>Integrated Pest Management (IPM): Adopt IPM strategies, including biological control, cultural practices, and targeted chemical treatments when necessary.</Text>
          <Text style={styles.listItem}>Pesticides: Use pesticides judiciously, targeting specific pests while minimizing harm to beneficial insects and the environment.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: '#f2f2f2',
  },
  section: {
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  imageCaption: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  list: {
    paddingLeft: 20,
  },
  listItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
  },
});

export default ArkaSaurabh;
