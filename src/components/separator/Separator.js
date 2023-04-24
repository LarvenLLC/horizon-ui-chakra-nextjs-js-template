import { Flex } from '@chakra-ui/react';
import React from 'react';

const HSeparator = (props) => {
	const { variant, ...rest } = props;
	return <Flex h='1px' w='100%' bg='rgba(135, 140, 189, 0.3)' {...rest} />;
};

const VSeparator = (props) => {
	const { variant, ...rest } = props;
	return <Flex w='1px' bg='rgba(135, 140, 189, 0.3)' {...rest} />;
};

export { HSeparator, VSeparator };
