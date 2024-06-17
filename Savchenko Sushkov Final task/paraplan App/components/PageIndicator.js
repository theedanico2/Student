import React from 'react';
import { View, StyleSheet } from 'react-native';

const PageIndicator = ({ totalPages, currentPage }) => {
  const renderIndicators = () => {
    const indicators = [];
    for (let i = 0; i < totalPages; i++) {
      indicators.push(
        <View
          key={i}
          style={[
            styles.indicator,
            currentPage === i ? styles.activeIndicator : null,
          ]}
        />
      );
    }
    return indicators;
  };

  return <View style={styles.container}>{renderIndicators()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'lightgray',
    margin: 5,
  },
  activeIndicator: {
    backgroundColor: '#FF8787',
    width: 20
  },
});

export default PageIndicator;