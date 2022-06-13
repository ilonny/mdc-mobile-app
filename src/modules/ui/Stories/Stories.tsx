import React, { useEffect, useMemo, useState } from 'react';
import { SafeAreaView, View, TouchableWithoutFeedback } from 'react-native';
import { Indent } from '../Indent';
import { Row } from '../Row';
import { StoriesProgressLine } from './components';
import { styles } from './styles';

type TProps = {
  contentComponents: JSX.Element[];
};

const SLIDE_DURATION = 5000;
let timeout: any;

export const Stories = (props: TProps) => {
  const [rerender, setRerender] = useState(0);
  const { contentComponents } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const componentToRender = useMemo(() => {
    if (activeIndex === 0) {
      return contentComponents[0];
    }
    if (activeIndex === contentComponents.length - 1) {
      return contentComponents[activeIndex];
    }
    return contentComponents[activeIndex];
  }, [activeIndex, contentComponents]);

  const lastIndex = useMemo(() => {
    return contentComponents.length - 1;
  }, [contentComponents.length]);

  return (
    <View style={styles.storiesWrapper}>
      <View style={styles.progressBarWrapper} key={rerender}>
        <SafeAreaView>
          <Row flex={1}>
            {contentComponents?.map((c, index) => {
              return (
                <>
                  {index !== 0 && <Indent width={5} />}
                  <StoriesProgressLine
                    activeIndex={activeIndex}
                    localIndex={index}
                    setActiveIndex={setActiveIndex}
                    lastIndex={lastIndex}
                    callback={() => {
                      clearTimeout(timeout);
                      timeout = setTimeout(() => {
                        setActiveIndex(index === lastIndex ? index : index + 1);
                      }, 2000);
                    }}
                  />
                </>
              );
            })}
          </Row>
        </SafeAreaView>
      </View>
      <View style={styles.contentWrapper}>{componentToRender}</View>
      <View style={styles.touchableAreas}>
        <TouchableWithoutFeedback
          style={styles.leftTouch}
          onPress={() => {
            // setActiveIndex(activeIndex - 1);
            setActiveIndex(i => (i === 0 ? 0 : i - 1));
            setRerender(r => r + 1);
          }}>
          <View style={styles.leftTouch} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            // setActiveIndex(activeIndex - 1);
            setActiveIndex(i => (i === lastIndex ? lastIndex : i + 1));
            setRerender(r => r + 1);
          }}>
          <View style={styles.rightTouch} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
