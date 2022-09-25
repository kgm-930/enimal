package com.enimal.backend.dto.Draw;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class AnimalAllDrawDto {
    private String animal;
    private int count;
    private int piece;
    private boolean badge; //미보유뽑기 여부
}
