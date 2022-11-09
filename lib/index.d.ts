import { NextApiRequest, NextApiResponse } from 'next';
import { DeepPartial, Options } from './types';
export declare function withImageProxy(passedOptions?: DeepPartial<Options>): (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
