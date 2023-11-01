import React, { useCallback, useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  Button,
  Indent,
  Row,
  SecondaryButton,
  Tabs,
  TouchableFeedback,
  Typography,
} from '../../../ui';
import { TArticle } from '../../types';
import { ArticleCard } from '../ArticleCard';
import { styles } from './styles';
import { useArticleCategoryList } from '../../hooks';
import { colors } from '../../../../theme';

type TProps = {
  items: TArticle[];
  allSmall?: boolean;
};

export const ArticleList = (props: TProps) => {
  const { items = [], allSmall = false } = props;
  const [activeTabIndex, setActiveTabIndex] = useState<number | undefined>(undefined);
  const {
    articleCategoryList,
    articleCategoryListLoading,
    getArticleCategoryListReq,
  } = useArticleCategoryList();
  const firstCard = useMemo(() => {
    if (items.length) {
      return items[0];
    }
    return null;
  }, [items]);

  const categories = useMemo(() => {
    if (allSmall && articleCategoryList?.length && items?.length) {
      const articleCategoryListCopy = [...articleCategoryList];
      articleCategoryListCopy.forEach(cat => {
        cat.count = items.filter(i => i.category_id == cat.label)?.length;
      });
      return articleCategoryListCopy;
    }
    return [];
  }, [articleCategoryList, items, allSmall]);

  const otherCards = useMemo(() => {
    if (allSmall) {
      console.log('categories?.length && activeTabIndex', categories?.length, activeTabIndex)
      if (categories?.length && (activeTabIndex !== undefined)) {
        return items?.filter(
          i => i.category_id == categories[activeTabIndex]?.label,
        );
      }
      return items;
    }
    if (items.length) {
      const itemsCopy = [...items];
      itemsCopy.shift();
      return itemsCopy;
    } else {
      return [];
    }
  }, [items, allSmall, categories, activeTabIndex]);

  const handleCategory = (index, category) => {
    setActiveTabIndex(index === activeTabIndex ? undefined : index);
  };

  return (
    <View style={styles.wrapper}>
      {categories?.length ? (
        <View>
          <Indent height={20} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories
              ?.filter(c => c.count)
              ?.map((c, i) => {
                return (
                  <>
                    {i !== 0 ? <Indent width={10} /> : <></>}
                    <Button
                      onPress={() => handleCategory(i, c)}
                      isSmallDarkGray
                      smallHeight
                      isWhite={i === activeTabIndex}
                      border={false}>
                      <Typography.ButtonText
                        color={
                          i === activeTabIndex ? colors.totalBlack : '#fff'
                        }>
                        {c.label} ({c.count})
                      </Typography.ButtonText>
                    </Button>
                  </>
                  // <TouchableFeedback>
                  // </TouchableFeedback>
                );
              })}
          </ScrollView>
        </View>
      ) : (
        <></>
      )}
      {!!firstCard && !allSmall && <ArticleCard data={firstCard} isBig />}
      {!!otherCards && (
        <>
          <Indent height={20} />
          <Row flexWrap="wrap" marginHorizontal={-2.5} alignItems="flex-start">
            {otherCards?.map(car => {
              return <ArticleCard key={car.id} data={car} />;
            })}
          </Row>
        </>
      )}
    </View>
  );
};
