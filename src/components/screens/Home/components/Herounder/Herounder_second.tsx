

import { RoutesEnum } from '@/constants/routes';
import { Button } from '@/UI/Button/Button';
import { Title } from '@/UI/Title/Title';

import { Grid } from '@/components/Grid/Grid';
import { useRouter } from 'next/router';
import styles from './Herounder_first.module.scss';
import classNames from 'classnames';


export const Herounder_second = () => {
	const { push } = useRouter();
	

	return (
		<section>
			<div className={classNames('container', styles.container)}>
				<div className={styles.top}>
					<Title variant="h2">Ищут совета</Title>
					<Button onClick={() => push(RoutesEnum.Map)}>Смотреть все</Button>
				</div>
				<Grid>
					
				</Grid>
				
			</div>
		</section>
	);
};
