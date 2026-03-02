import moment from 'moment';
import { TTrip } from './../types/index';

export const getFutureTrips = (list: TTrip[]) => {
  return list?.filter(trip => {
    const today = moment(); // Текущий момент времени

    // Парсим trip.date_end в формате DD.MM.YYYY со строгой проверкой
    const dateEnd = moment(trip.date_end, 'DD.MM.YYYY', true);

    // Проверяем, удалось ли успешно спарсить дату.
    // Если date_end был в неверном формате, dateEnd.isValid() вернет false.
    if (!dateEnd.isValid()) {
      // Можно добавить логирование или просто пропустить некорректные даты
      console.warn(
        `Некорректный формат даты для trip.date_end: ${trip.date_end}`,
      );
      return false;
    }

    // Сравниваем даты и проверяем статус
    // dateEnd.diff(today, 'days') >= 0 означает, что дата окончания поездки
    // либо сегодня, либо в будущем.
    if (dateEnd.diff(today, 'days') >= 0 && trip.status !== 'CANCELED') {
      return true;
    }
    return false;
  });
};
