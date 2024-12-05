import { get } from 'src/api/call.ts';
import { WORD_API } from 'src/config/gameConfig.ts';
import { ApiWord } from 'src/types/GameTypes.ts';
import { formatWord } from 'src/helpers/gameHelper.ts';

export const getRandomWord = async () => {
  const response = await get<ApiWord[]>(WORD_API);
  return formatWord(response[0].name);
}
